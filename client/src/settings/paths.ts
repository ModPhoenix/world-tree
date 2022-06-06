import { getLinksFromPaths } from 'utils';

/**
 * Relative application URL paths
 */
export const Paths = {
  index: '/',
  signIn: 'sign-in',
} as const;

export type PathsType = typeof Paths;

/**
 * Absolute application URL paths
 */
export const Links = getLinksFromPaths(Paths);
