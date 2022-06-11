import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { useAuth } from 'hooks';

import { SignInForm, SignInFormValues } from '../SignInForm';

const SignInPageW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const AuthFormPaper = styled(Paper)`
  width: 450px;
  padding: 40px;
`;

export function SignInPage(): ReactElement {
  const { signIn } = useAuth();

  async function onSubmit(data: SignInFormValues) {
    await signIn?.(data);
  }

  return (
    <SignInPageW>
      <Typography variant="h4" gutterBottom>
        Sign in to your account
      </Typography>
      <Typography marginBottom="40px">
        Or <Link href="#">create account</Link>
      </Typography>
      <AuthFormPaper>
        <SignInForm onSubmit={onSubmit} />
      </AuthFormPaper>
    </SignInPageW>
  );
}
