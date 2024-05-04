import {
  BaseEntity,
  cleanStringValue,
  ConfigApi,
  failNoIdYet,
  getField,
  hasMany,
  isLoaded,
  loadLens,
  newChangesProxy,
  newRequiredRule,
  setField,
  setOpts,
  toIdOf,
  toJSON,
} from "joist-orm";
import type {
  Changes,
  Collection,
  EntityFilter,
  EntityGraphQLFilter,
  EntityMetadata,
  FilterOf,
  Flavor,
  GraphQLFilterOf,
  JsonPayload,
  Lens,
  Loaded,
  LoadHint,
  OptsOf,
  OrderBy,
  PartialOrNull,
  TaggedId,
  ToJsonHint,
  ValueFilter,
  ValueGraphQLFilter,
} from "joist-orm";
import type { Context } from "src/context";
import { Temporal } from "temporal-polyfill";
import { Author, authorMeta, Book, bookMeta, EntityManager, newAuthor } from "../entities";
import type { BookId, Entity } from "../entities";

export type AuthorId = Flavor<string, Author>;

export interface AuthorFields {
  id: { kind: "primitive"; type: string; unique: true; nullable: never };
  firstName: { kind: "primitive"; type: string; unique: false; nullable: never; derived: false };
  lastName: { kind: "primitive"; type: string; unique: false; nullable: undefined; derived: false };
  birthday: { kind: "primitive"; type: Temporal.PlainDate; unique: false; nullable: never; derived: false };
  createdAt: { kind: "primitive"; type: Temporal.ZonedDateTime; unique: false; nullable: never; derived: true };
  updatedAt: { kind: "primitive"; type: Temporal.ZonedDateTime; unique: false; nullable: never; derived: true };
}

export interface AuthorOpts {
  firstName: string;
  lastName?: string | null;
  birthday: Temporal.PlainDate;
  books?: Book[];
}

export interface AuthorIdsOpts {
  bookIds?: BookId[] | null;
}

export interface AuthorFilter {
  id?: ValueFilter<AuthorId, never> | null;
  firstName?: ValueFilter<string, never>;
  lastName?: ValueFilter<string, null>;
  birthday?: ValueFilter<Temporal.PlainDate, never>;
  createdAt?: ValueFilter<Temporal.ZonedDateTime, never>;
  updatedAt?: ValueFilter<Temporal.ZonedDateTime, never>;
  books?: EntityFilter<Book, BookId, FilterOf<Book>, null | undefined>;
}

export interface AuthorGraphQLFilter {
  id?: ValueGraphQLFilter<AuthorId>;
  firstName?: ValueGraphQLFilter<string>;
  lastName?: ValueGraphQLFilter<string>;
  birthday?: ValueGraphQLFilter<Temporal.PlainDate>;
  createdAt?: ValueGraphQLFilter<Temporal.ZonedDateTime>;
  updatedAt?: ValueGraphQLFilter<Temporal.ZonedDateTime>;
  books?: EntityGraphQLFilter<Book, BookId, GraphQLFilterOf<Book>, null | undefined>;
}

export interface AuthorOrder {
  id?: OrderBy;
  firstName?: OrderBy;
  lastName?: OrderBy;
  birthday?: OrderBy;
  createdAt?: OrderBy;
  updatedAt?: OrderBy;
}

export const authorConfig = new ConfigApi<Author, Context>();

authorConfig.addRule(newRequiredRule("firstName"));
authorConfig.addRule(newRequiredRule("birthday"));
authorConfig.addRule(newRequiredRule("createdAt"));
authorConfig.addRule(newRequiredRule("updatedAt"));

export abstract class AuthorCodegen extends BaseEntity<EntityManager, string> implements Entity {
  static readonly tagName = "a";
  static readonly metadata: EntityMetadata<Author>;

  declare readonly __orm: {
    filterType: AuthorFilter;
    gqlFilterType: AuthorGraphQLFilter;
    orderType: AuthorOrder;
    optsType: AuthorOpts;
    fieldsType: AuthorFields;
    optIdsType: AuthorIdsOpts;
    factoryOptsType: Parameters<typeof newAuthor>[1];
  };

  constructor(em: EntityManager, opts: AuthorOpts) {
    super(em, opts);
    setOpts(this as any as Author, opts, { calledFromConstructor: true });
  }

  get id(): AuthorId {
    return this.idMaybe || failNoIdYet("Author");
  }

  get idMaybe(): AuthorId | undefined {
    return toIdOf(authorMeta, this.idTaggedMaybe);
  }

  get idTagged(): TaggedId {
    return this.idTaggedMaybe || failNoIdYet("Author");
  }

  get idTaggedMaybe(): TaggedId | undefined {
    return getField(this, "id");
  }

  get firstName(): string {
    return getField(this, "firstName");
  }

  set firstName(firstName: string) {
    setField(this, "firstName", cleanStringValue(firstName));
  }

  get lastName(): string | undefined {
    return getField(this, "lastName");
  }

  set lastName(lastName: string | undefined) {
    setField(this, "lastName", cleanStringValue(lastName));
  }

  get birthday(): Temporal.PlainDate {
    return getField(this, "birthday");
  }

  set birthday(birthday: Temporal.PlainDate) {
    setField(this, "birthday", birthday);
  }

  get createdAt(): Temporal.ZonedDateTime {
    return getField(this, "createdAt");
  }

  get updatedAt(): Temporal.ZonedDateTime {
    return getField(this, "updatedAt");
  }

  set(opts: Partial<AuthorOpts>): void {
    setOpts(this as any as Author, opts);
  }

  setPartial(opts: PartialOrNull<AuthorOpts>): void {
    setOpts(this as any as Author, opts as OptsOf<Author>, { partial: true });
  }

  get changes(): Changes<Author> {
    return newChangesProxy(this) as any;
  }

  load<U, V>(fn: (lens: Lens<Author>) => Lens<U, V>, opts: { sql?: boolean } = {}): Promise<V> {
    return loadLens(this as any as Author, fn, opts);
  }

  populate<const H extends LoadHint<Author>>(hint: H): Promise<Loaded<Author, H>>;
  populate<const H extends LoadHint<Author>>(opts: { hint: H; forceReload?: boolean }): Promise<Loaded<Author, H>>;
  populate<const H extends LoadHint<Author>, V>(hint: H, fn: (a: Loaded<Author, H>) => V): Promise<V>;
  populate<const H extends LoadHint<Author>, V>(
    opts: { hint: H; forceReload?: boolean },
    fn: (a: Loaded<Author, H>) => V,
  ): Promise<V>;
  populate<const H extends LoadHint<Author>, V>(
    hintOrOpts: any,
    fn?: (a: Loaded<Author, H>) => V,
  ): Promise<Loaded<Author, H> | V> {
    return this.em.populate(this as any as Author, hintOrOpts, fn);
  }

  isLoaded<const H extends LoadHint<Author>>(hint: H): this is Loaded<Author, H> {
    return isLoaded(this as any as Author, hint);
  }

  toJSON(): object;
  toJSON<const H extends ToJsonHint<Author>>(hint: H): Promise<JsonPayload<Author, H>>;
  toJSON(hint?: any): object {
    return !hint || typeof hint === "string" ? super.toJSON() : toJSON(this, hint);
  }

  get books(): Collection<Author, Book> {
    return this.__data.relations.books ??= hasMany(
      this as any as Author,
      bookMeta,
      "books",
      "author",
      "author_id",
      undefined,
    );
  }
}
