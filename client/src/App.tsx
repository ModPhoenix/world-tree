import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import { PrivateRoute } from 'components';
import { HomePage, SignInPage, SignUpPage } from 'features';
import { Paths } from 'settings';

export function App(): ReactElement | null {
  const element = useRoutes([
    { path: Paths.signUp, element: <SignUpPage /> },
    { path: Paths.signIn, element: <SignInPage /> },
    { path: Paths.index, element: <PrivateRoute component={HomePage} /> },
  ]);

  return element;
}
