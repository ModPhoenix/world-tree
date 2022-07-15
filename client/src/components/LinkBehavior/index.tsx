import { forwardRef, Ref } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

interface LinkBehaviorInner extends Omit<RouterLinkProps, 'to'> {
  href: RouterLinkProps['to'];
}

function LinkBehaviorInner(
  props: LinkBehaviorInner,
  ref: Ref<HTMLAnchorElement>,
) {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
}

export const LinkBehavior = forwardRef<HTMLAnchorElement, LinkBehaviorInner>(
  LinkBehaviorInner,
);
