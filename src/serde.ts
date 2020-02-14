import { EntityMetadata } from "./EntityManager";

export interface ColumnSerde {
  setOnEntity(data: any, row: any): void;

  setOnRow(data: any, row: any): void;

  getFromEntity(data: any): any;

  mapToDb(value: any): any;
}

export class SimpleSerde implements ColumnSerde {
  constructor(private fieldName: string, private columnName: string) {}

  setOnEntity(data: any, row: any): void {
    data[this.fieldName] = row[this.columnName];
  }

  setOnRow(data: any, row: any): void {
    row[this.columnName] = data[this.fieldName];
  }

  getFromEntity(data: any) {
    return data[this.fieldName];
  }

  mapToDb(value: any) {
    return value;
  }
}

/** Maps integer primary keys ot strings "because GraphQL". */
export class PrimaryKeySerde implements ColumnSerde {
  constructor(private fieldName: string, private columnName: string) {}

  setOnEntity(data: any, row: any): void {
    data[this.fieldName] = keyToString(row[this.columnName]);
  }

  setOnRow(data: any, row: any): void {
    row[this.columnName] = keyToNumber(data[this.fieldName]);
  }

  getFromEntity(data: any) {
    return keyToNumber(data[this.fieldName]);
  }

  mapToDb(value: any) {
    return value;
  }
}

export class ForeignKeySerde implements ColumnSerde {
  // TODO EntityMetadata being in here is weird.
  constructor(private fieldName: string, private columnName: string, public otherMeta: () => EntityMetadata<any>) {}

  setOnEntity(data: any, row: any): void {
    data[this.fieldName] = keyToString(row[this.columnName]);
  }

  setOnRow(data: any, row: any): void {
    row[this.columnName] = keyToNumber(maybeResolveReferenceToId(data[this.fieldName]));
  }

  getFromEntity(data: any) {
    return keyToNumber(maybeResolveReferenceToId(data[this.fieldName]));
  }

  mapToDb(value: any) {
    return keyToNumber(maybeResolveReferenceToId(value));
  }
}

export class EnumFieldSerde implements ColumnSerde {
  constructor(private fieldName: string, private columnName: string, private enumObject: any) {}

  setOnEntity(data: any, row: any): void {
    data[this.fieldName] = Object.values(this.enumObject).find((v: any) => v.id === row[this.columnName]);
  }

  setOnRow(data: any, row: any): void {
    row[this.columnName] = data[this.fieldName]?.id;
  }

  getFromEntity(data: any) {
    return data[this.fieldName]?.id;
  }

  mapToDb(value: any) {
    return value?.id;
  }
}

// Before a referred-to object is saved, we keep its instance in our data
// map, and then assume it will be persisted before we're asked to persist
// ourselves, at which point we'll resolve it to an id.
export function maybeResolveReferenceToId(value: any) {
  return value?.id || value;
}

/** Converts `value` to a number, i.e. for string ids, unles its undefined. */
export function keyToNumber(value: any): number | undefined {
  return value === undefined ? undefined : Number(value);
}

/** Converts `value` to a number, i.e. for string ids, unles its undefined. */
export function keyToString(key: any): string | undefined {
  return key === undefined ? undefined : String(key);
}
