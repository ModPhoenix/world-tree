import { useRoutes } from 'react-router-dom';

import { MainLayout } from 'components';
import {
  EducationPage,
  ExplorePage,
  HomePage,
  PeoplePage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  AddNodePage,
  NodePage,
  UpdateNodePage,
} from 'features';
import { Paths } from 'settings';

export function App(): JSX.Element | null {
  const element = useRoutes([
    {
      path: Paths.index,
      element: <MainLayout />,
      children: [
        { path: Paths.index, element: <HomePage /> },
        { path: Paths.signUp, element: <SignUpPage /> },
        { path: Paths.signIn, element: <SignInPage /> },
        {
          path: Paths.node.index,
          children: [
            {
              path: Paths.node.page.index,
              children: [
                { index: true, element: <NodePage /> },
                { path: Paths.node.page.update, element: <UpdateNodePage /> },
              ],
            },
          ],
        },
        {
          path: Paths.compose.index,
          children: [{ path: Paths.compose.node, element: <AddNodePage /> }],
        },
        { path: Paths.explore, element: <ExplorePage /> },
        { path: Paths.education, element: <EducationPage /> },
        { path: Paths.people, element: <PeoplePage /> },
        { path: Paths.profile, element: <ProfilePage /> },
      ],
    },
  ]);

  return element;
}
