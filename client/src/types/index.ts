export * from './types.codegen';

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
