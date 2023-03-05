import { NodeQuery } from 'api';

export * from './types.codegen';

// Type utils

/**
 * Flatten that flattens array types to their element types,
 * but leaves them alone otherwise.
 */
export type Flatten<T> = T extends unknown[] ? T[number] : T;

/**
 * FlattenNonNullable that flattens array types to their element types
 * and makes element types non nullable.
 */
export type FlattenNonNullable<T> = NonNullable<Flatten<T>>;

/**
 * JSON web tokens (JWTs) claims are pieces of information asserted about a subject
 */
export interface Claims {
  /**
   * (subject): Subject of the JWT (the user ID)
   */
  sub: string;
  /**
   * (issued at time): Time at which the JWT was issued; can be used to determine age of the JWT
   */
  iat: number;
}

export type NodeFromQuery = NodeQuery['node'];
export type NodeChildrenFromQuery = NodeQuery['node']['children'];
export type NodeContextFromQuery = NodeQuery['node']['context'];
export type NodeParentFromQuery = NodeQuery['node']['parent'];
