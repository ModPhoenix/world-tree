import { DialogContentProps, DialogTitleProps } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import { DialogProps } from '@mui/material/Dialog';
import { ReactNode } from 'react';

export interface ModalOptions {
  open?: boolean;
  title?: ReactNode;
  titleProps?: DialogTitleProps;
  description?: ReactNode;
  content?: ReactNode | null;
  contentProps?: DialogContentProps;
  confirmationText?: ReactNode;
  cancellationText?: ReactNode;
  dialogProps?: Omit<DialogProps, 'open'>;
  confirmationButtonProps?: ButtonProps;
  cancellationButtonProps?: ButtonProps;
  allowClose?: boolean;
  resolve?: () => void;
  reject?: () => void;
}

export interface ModalProviderProps {
  children: ReactNode;
  defaultOptions?: ModalOptions;
}
