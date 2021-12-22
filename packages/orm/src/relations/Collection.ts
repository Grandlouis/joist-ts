import { Entity, IdOf, Loadable } from "../EntityManager";
import { CustomCollection } from "./CustomCollection";
import { ManyToManyCollection } from "./ManyToManyCollection";
import { OneToManyCollection } from "./OneToManyCollection";
import { Relation } from "./Relation";

/** A collection of `U` within `T`, either one-to-many or many-to-many. */
export interface Collection<T extends Entity, U extends Entity>
  extends Relation<T, U>,
    Loadable<LoadedCollection<T, U>, U> {
  load(opts?: { withDeleted: boolean }): Promise<ReadonlyArray<U>>;

  find(id: IdOf<U>): Promise<U | undefined>;

  add(other: U): void;

  remove(other: U): void;

  readonly isLoaded: boolean;
}

/** Adds a known-safe `get` accessor. */
export interface LoadedCollection<T extends Entity, U extends Entity> extends Collection<T, U> {
  get: ReadonlyArray<U>;

  getWithDeleted: ReadonlyArray<U>;

  set(values: U[]): void;

  removeAll(): void;
}

/** Type guard utility for determining if an entity field is a Collection. */
export function isCollection(maybeCollection: any): maybeCollection is Collection<any, any> {
  return (
    maybeCollection instanceof OneToManyCollection ||
    maybeCollection instanceof ManyToManyCollection ||
    maybeCollection instanceof CustomCollection
  );
}

/** Type guard utility for determining if an entity field is a loaded Collection. */
export function isLoadedCollection(
  maybeCollection: any,
): maybeCollection is Collection<any, any> & LoadedCollection<any, any> {
  return isCollection(maybeCollection) && maybeCollection.isLoaded;
}