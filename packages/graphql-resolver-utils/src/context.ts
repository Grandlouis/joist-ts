import { EntityManager } from "joist-orm";

export type MaybePromise<T> = T | Promise<T>;

// Kinda odd that ctx needs to be any here...
export type Resolver<R, A, T> = (root: R, args: A, ctx: any, info: any) => MaybePromise<T>;

export type Context = { em: EntityManager };