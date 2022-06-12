import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ReactElement } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components/macro';

const SignInFormW = styled.form``;

const FormRow = styled.div`
  margin-bottom: 20px;
`;

export interface SignInFormValues {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSubmit: (data: SignInFormValues) => void;
}

export function SignInForm({ onSubmit }: SignInFormProps): ReactElement {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<SignInFormValues>({
    defaultValues: { email: '', password: '' },
  });

  return (
    <SignInFormW onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label="Email address"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </FormRow>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
      >
        Sign In
      </Button>
    </SignInFormW>
  );
}
