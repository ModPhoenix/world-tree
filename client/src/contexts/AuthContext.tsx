import { createContext, ReactElement, ReactNode, useState } from 'react';

import { SignInMutationVariables, useSignInMutation } from 'api';
import { getAccessToken, removeAccessToken, saveAccessToken } from 'utils';

export interface AuthContextState {
  isAuthorized: boolean;
  signIn: ((credentials: SignInMutationVariables) => Promise<void>) | null;
  logout: (() => void) | null;
}

export const AuthContext = createContext<AuthContextState>({
  isAuthorized: false,
  signIn: null,
  logout: null,
});

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Authorizing the user in the system
 */
export function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    getAccessToken(),
  );

  const [signInMutation, { client }] = useSignInMutation();

  async function signIn(credentials: SignInMutationVariables) {
    const { data } = await signInMutation({ variables: credentials });

    if (data?.signIn) {
      saveAccessToken(data.signIn);
      setAccessToken(data.signIn);
    }
  }

  async function logout() {
    removeAccessToken();
    setAccessToken(null);
    await client.cache.reset();
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthorized: Boolean(accessToken),
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
