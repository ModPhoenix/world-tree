import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';

const SignUpFormW = styled('form')``;

const FormRow = styled('div')`
  margin-bottom: 20px;
`;

export interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
}

interface SignUpFormProps {
  onSubmit: (data: SignUpFormValues) => void;
}

export function SignUpForm({ onSubmit }: SignUpFormProps): JSX.Element {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<SignUpFormValues>({
    defaultValues: { email: '', username: '', password: '' },
  });

  return (
    <SignUpFormW onSubmit={handleSubmit(onSubmit)}>
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
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
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
        Sign Up
      </Button>
    </SignUpFormW>
  );
}
