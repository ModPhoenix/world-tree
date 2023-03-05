import Link from '@mui/material/Link';

import { useAuth } from 'hooks';
import { Links } from 'settings';

import { AuthPageLayout, SignInForm, SignInFormValues } from '../../components';

export function SignInPage(): JSX.Element {
  const { signIn } = useAuth();

  async function onSubmit(data: SignInFormValues) {
    await signIn?.({ input: data });
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
