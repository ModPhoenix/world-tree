import { useContext } from 'react';

import { AuthContext } from 'contexts';

/**
 * `useAuth` lets you get information from `AuthContext`
 *
 * @returns `AuthContext`
 */
export function useAuth() {
  return useContext(AuthContext);
}
