import { createContext, ReactElement, ReactNode } from 'react';

import { SignInMutationVariables, useSignInMutation } from 'api';
import { User } from 'types';

// import { useMeQuery } from 'api';

export interface AuthContextState {
  user: User | null;
  isAuthorized: boolean;
  signIn: ((credentials: SignInMutationVariables) => Promise<void>) | null;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
  isAuthorized: false,
  signIn: null,
});

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Authorizing the user in the system
 */
export function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const [signInMutation] = useSignInMutation();

  async function signIn(credentials: SignInMutationVariables) {
    const { data } = await signInMutation({ variables: credentials });
  }

  return (
    <AuthContext.Provider
      value={{
        user: null,
        isAuthorized: false,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
