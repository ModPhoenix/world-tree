import { TextField, TextFieldProps } from '@mui/material';
import { ReactElement } from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { isFieldErrorMessage } from '../utils';

export { TextField };
export type { TextFieldProps };

type TextFieldControlProps<T = FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'name' | 'defaultValue'>;

export function TextFieldControl<T>({
  control,
  name,
  rules,
  defaultValue,
  error: externalError,
  helperText,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ...textFieldProps
}: TextFieldControlProps<T>): ReactElement {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { error },
      }) => (
        <TextField
          {...textFieldProps}
          id={name}
          name={name}
          onBlur={(...args) => {
            onBlur();
            externalOnBlur?.(...args);
          }}
          onChange={(...args) => {
            onChange(...args);
            externalOnChange?.(...args);
          }}
          value={value}
          ref={ref}
          error={Boolean(error) || externalError}
          helperText={isFieldErrorMessage(error) ? error.message : helperText}
        />
      )}
    />
  );
}
