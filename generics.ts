import { BaseObject } from "./helpers";

/**
 * Recursively adds a key to an object.
 * Allowing to use the syntax "object["string_key"]"
 */

export type KeyingObject<T extends BaseObject> = {
  [K in keyof T]: T[K] extends BaseObject ? KeyingObject<T[K]> : T[K];
} & {
  [key: string]: T[keyof T];
};
