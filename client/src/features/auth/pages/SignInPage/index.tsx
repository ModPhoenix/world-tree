import Link from '@mui/material/Link';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks';
import { Links } from 'settings';

import { AuthPageLayout, SignInForm, SignInFormValues } from '../../components';

export function SignInPage(): ReactElement {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(data: SignInFormValues) {
    await signIn?.(data);

    navigate(Links.index);
  }

  return (
    <AuthPageLayout
      title="Sign in to your account"
      subtitle={
        <>
          Or <Link href={Links.signUp}>create account</Link>
        </>
      }
    >
      <SignInForm onSubmit={onSubmit} />
    </AuthPageLayout>
  );
}
