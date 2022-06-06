import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ReactElement } from 'react';
import styled from 'styled-components/macro';

const SignInFormW = styled.div``;

const FormRow = styled.div`
  margin-bottom: 20px;
`;

export function SignInForm(): ReactElement {
  return (
    <SignInFormW>
      <FormRow>
        <TextField
          type="email"
          label="Email address"
          variant="outlined"
          fullWidth
        />
      </FormRow>
      <FormRow>
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
        />
      </FormRow>
      <Button variant="contained" fullWidth>
        Sign In
      </Button>
    </SignInFormW>
  );
}
