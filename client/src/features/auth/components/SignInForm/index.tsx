import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';

const SignInFormW = styled('form')``;

const FormRow = styled('div')`
  margin-bottom: 20px;
`;

export interface SignInFormValues {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSubmit: (data: SignInFormValues) => void;
}

export function SignInForm({ onSubmit }: SignInFormProps): JSX.Element {
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
              required
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
              required
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
