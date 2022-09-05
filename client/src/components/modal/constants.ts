import { ModalOptions } from './types';

export const DEFAULT_OPTIONS: ModalOptions = {
  title: 'Are you sure?',
  description: '',
  content: null,
  confirmationText: 'Ok',
  cancellationText: 'Cancel',
  dialogProps: {
    maxWidth: 'xs',
    sx: (theme) => ({
      '.MuiDialogTitle-root': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      '.MuiDialogContent-root': {
        marginTop: theme.spacing(2),
      },
      '.MuiDialogActions-spacing': {
        padding: theme.spacing(2),
        '> :not(:first-of-type)': {
          marginLeft: theme.spacing(2),
        },
      },
    }),
  },
  confirmationButtonProps: {
    variant: 'contained',
    color: 'primary',
  },
  cancellationButtonProps: {
    variant: 'outlined',
    color: 'inherit',
  },
  titleProps: {},
  contentProps: {},
  allowClose: true,
};
