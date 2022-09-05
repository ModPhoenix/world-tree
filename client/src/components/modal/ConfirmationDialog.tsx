import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { ModalOptions } from './types';

type ModalHandler = () => void;

export interface ConfirmationDialogProps
  extends Pick<DialogProps, 'open' | 'onClose'> {
  onCancel?: ModalHandler;
  onConfirm: ModalHandler;
  options: ModalOptions;
}

const ModalDialog = ({
  open,
  options,
  onCancel,
  onConfirm,
  onClose,
}: ConfirmationDialogProps) => {
  const {
    title,
    description,
    content,
    confirmationText,
    cancellationText,
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
    titleProps,
    contentProps,
    allowClose,
  } = options;

  return (
    <Dialog
      fullWidth
      {...dialogProps}
      open={open}
      onClose={allowClose ? onClose : undefined}
    >
      {title ? <DialogTitle {...titleProps}>{title}</DialogTitle> : null}
      {content ? (
        <DialogContent {...contentProps}>{content}</DialogContent>
      ) : (
        description && (
          <DialogContent {...contentProps}>
            <DialogContentText>{description}</DialogContentText>
          </DialogContent>
        )
      )}
      <DialogActions>
        <Button {...cancellationButtonProps} onClick={onCancel}>
          {cancellationText}
        </Button>
        <Button
          color="primary"
          {...confirmationButtonProps}
          onClick={onConfirm}
        >
          {confirmationText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;
