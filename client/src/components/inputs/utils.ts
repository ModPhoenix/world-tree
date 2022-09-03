import { ControllerFieldState, FieldError } from 'react-hook-form';

export function isFieldErrorMessage(
  error: ControllerFieldState['error'],
): error is FieldError {
  return (error as FieldError)?.message !== undefined;
}
