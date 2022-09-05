import Link from '@mui/material/Link';

import { useAuth } from 'hooks';
import { Links } from 'settings';

import { AuthPageLayout, SignUpFormValues, SignUpForm } from '../../components';

export function SignUpPage(): JSX.Element {
  const { signUp } = useAuth();

  async function onSubmit(data: SignUpFormValues) {
    await signUp?.(data);
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
