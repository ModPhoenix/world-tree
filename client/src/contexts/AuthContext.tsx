import { createContext, ReactElement, ReactNode, useState } from 'react';

import {
  SignInMutationVariables,
  SignUpMutationVariables,
  useSignInMutation,
  useSignUpMutation,
} from 'api';
import { getAccessToken, removeAccessToken, saveAccessToken } from 'utils';

export interface AuthContextState {
  isAuthorized: boolean;
  signUp: ((values: SignUpMutationVariables) => Promise<void>) | null;
  signIn: ((values: SignInMutationVariables) => Promise<void>) | null;
  logout: (() => void) | null;
}

export const AuthContext = createContext<AuthContextState>({
  isAuthorized: false,
  signUp: null,
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

  const [signUpMutation, { client }] = useSignUpMutation();
  const [signInMutation] = useSignInMutation();

  client.onResetStore(async () => setAccessToken(null));

  async function signUp(values: SignUpMutationVariables) {
    const { data } = await signUpMutation({ variables: values });

    if (data?.signUp) {
      saveAccessToken(data.signUp);
      setAccessToken(data.signUp);
    }
  }

  async function signIn(values: SignInMutationVariables) {
    const { data } = await signInMutation({ variables: values });

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
        signUp,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
