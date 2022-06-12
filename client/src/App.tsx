import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import { PrivateRoute } from 'components';
import { HomePage, SignInPage } from 'features';
import { Paths } from 'settings';

export function App(): ReactElement | null {
  const element = useRoutes([
    { path: Paths.index, element: <PrivateRoute component={HomePage} /> },
    { path: Paths.signIn, element: <SignInPage /> },
  ]);

  return element;
}
