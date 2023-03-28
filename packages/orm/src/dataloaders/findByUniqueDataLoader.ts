import DataLoader from "dataloader";
import { Entity } from "../Entity";
import { EntityManager, MaybeAbstractEntityConstructor } from "../EntityManager";
import { Field, getMetadata } from "../EntityMetadata";
import { abbreviation } from "../QueryBuilder";
import {
  addTablePerClassJoinsAndClassTag,
  ColumnCondition,
  maybeAddNotSoftDeleted,
  ParsedFindQuery,
} from "../QueryParser";
import { Column } from "../serde";
import { getOrSet, groupBy } from "../utils";

export function findByUniqueDataLoader<T extends Entity>(
  em: EntityManager,
  type: MaybeAbstractEntityConstructor<T>,
  field: Field,
  softDeletes: "include" | "exclude",
): DataLoader<any, unknown | undefined> {
  const key = `${type.name}:unique:${field.fieldName}:${softDeletes}`;
  return getOrSet(em.findLoaders, key, () => {
    return new DataLoader<any, T | undefined>(async (values) => {
      const meta = getMetadata(type);
      const alias = abbreviation(meta.tableName);

      const conditions: ColumnCondition[] = [];
      const query: ParsedFindQuery = {
        selects: [`${alias}.*`],
        tables: [{ alias, join: "primary", table: meta.tableName }],
        conditions,
      };

      addTablePerClassJoinsAndClassTag(query, meta, alias, true);
      maybeAddNotSoftDeleted(conditions, meta, alias, softDeletes);

      let column: Column;
      switch (field.kind) {
        case "primitive":
          column = field.serde.columns[0];
          conditions.push({
            alias,
            column: column.columnName,
            cond: { kind: "in", value: values.map((v) => column.mapToDb(v)) },
          });
          break;
        default:
          throw new Error(`Unsupported field ${field.fieldName}`);
      }

      const rows = await em.driver.executeFind(em, query, {});

      const rowsByValue = groupBy(rows, (row) => row[column.columnName]);

      // Re-order the output by the batched input
      return values.map((value) => {
        const result = rowsByValue.get(value) ?? [];
        return result[0];
      });
    });
  });
}