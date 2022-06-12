import { ComponentType, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from 'hooks';
import { Links } from 'settings';

interface PrivateRouteProps {
  component: ComponentType;
}

export function PrivateRoute({
  component: Component,
}: PrivateRouteProps): ReactElement | null {
  const { isAuthorized } = useAuth();

  const location = useLocation();

  if (!Component) {
    return null;
  }

  if (isAuthorized) {
    return <Component />;
  }

  return (
    <Navigate
      to={{
        pathname: Links.signIn,
      }}
      replace
      state={{ from: location }}
    />
  );
}
