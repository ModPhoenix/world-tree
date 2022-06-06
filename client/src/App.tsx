import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import { HomePage, SignInPage } from 'features';
import { Paths } from 'settings';

export function App(): ReactElement | null {
  const element = useRoutes([
    { path: Paths.index, element: <HomePage /> },
    { path: Paths.signIn, element: <SignInPage /> },
  ]);

  return element;
}
