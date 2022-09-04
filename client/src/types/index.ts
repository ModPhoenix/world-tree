import { KnowledgesQuery } from 'api';

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

export type KnowledgeFromQuery = KnowledgesQuery['knowledges'][0];
export type KnowledgeChildFromQuery =
  KnowledgesQuery['knowledges'][0]['children'][0];
export type KnowledgeParentFromQuery =
  KnowledgesQuery['knowledges'][0]['parents'][0];
