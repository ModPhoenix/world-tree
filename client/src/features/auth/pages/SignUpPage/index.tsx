import Link from '@mui/material/Link';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks';
import { Links } from 'settings';

import { AuthPageLayout, SignUpFormValues, SignUpForm } from '../../components';

export function SignUpPage(): ReactElement {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(data: SignUpFormValues) {
    await signUp?.(data);

    navigate(Links.index);
  }

  return (
    <AuthPageLayout
      title="Create new account"
      subtitle={
        <>
          Or <Link href={Links.signIn}>sign in on existing account</Link>
        </>
      }
    >
      <SignUpForm onSubmit={onSubmit} />
    </AuthPageLayout>
  );
}
