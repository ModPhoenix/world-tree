import { matchPath, useLocation } from 'react-router-dom';
/**
 * Provide the routes in descendant order.
 * This means that if you have nested routes like:
 * `users`, `users/new`, `users/edit`.
 * Then the order should be `['users/add', 'users/edit', 'users']`.
 */
export function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}
