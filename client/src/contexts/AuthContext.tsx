import { useSnackbar } from 'notistack';
import { createContext, ReactElement, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  SignInMutationVariables,
  SignUpMutationVariables,
  useUsersQuery,
  useSignInMutation,
  useSignUpMutation,
} from 'api';
import { Links } from 'settings';
import { User } from 'types';
import {
  getAccessToken,
  getClaims,
  removeAccessToken,
  saveAccessToken,
} from 'utils';

export interface AuthContextState {
  user: User | null;
  isAuthorized: boolean;
  signUp: ((values: SignUpMutationVariables) => Promise<void>) | null;
  signIn: ((values: SignInMutationVariables) => Promise<void>) | null;
  logout: (() => void) | null;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
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
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState<string | null>(() =>
    getAccessToken(),
  );

  const [signUpMutation, { client }] = useSignUpMutation();
  const [signInMutation] = useSignInMutation();
  const { data } = useUsersQuery({
    skip: !accessToken,
    variables: {
      where: {
        id: getClaims(accessToken)?.sub,
      },
    },
  });

  client.onResetStore(async () => setAccessToken(null));

  async function signUp(values: SignUpMutationVariables) {
    await signUpMutation({
      variables: values,
      onCompleted: (data) => {
        if (data?.signUp) {
          saveAccessToken(data.signUp);
          setAccessToken(data.signUp);
          enqueueSnackbar('Account created successfully', {
            variant: 'success',
          });
          navigate(Links.index);
        }
      },
      onError: (error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
    });
  }

  async function signIn(values: SignInMutationVariables) {
    await signInMutation({
      variables: values,
      onCompleted: (data) => {
        if (data?.signIn) {
          saveAccessToken(data.signIn);
          setAccessToken(data.signIn);
          enqueueSnackbar('You have successfully signed in', {
            variant: 'success',
          });
          navigate(Links.index);
        }
      },
      onError: (error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
    });
  }

  async function logout() {
    removeAccessToken();
    setAccessToken(null);
    await client.cache.reset();
  }

  return (
    <AuthContext.Provider
      value={{
        user: data?.users[0] ?? null,
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
