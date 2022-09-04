import { getLinksFromPaths } from 'utils';

/**
 * Relative application URL paths
 */
export const Paths = {
  index: '/',
  signUp: 'sign-up',
  signIn: 'sign-in',
  node: {
    index: 'node',
    page: {
      index: ':name',
      update: 'update',
    },
  },
  compose: {
    index: 'compose',
    node: 'node',
  },
  explore: 'explore',
  education: 'education',
  people: 'people',
  profile: ':username',
} as const;

export type PathsType = typeof Paths;

/**
 * Absolute application URL paths
 */
export const Links = getLinksFromPaths(Paths);
