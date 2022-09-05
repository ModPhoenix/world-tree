import { useState, useCallback, createContext, useMemo } from 'react';

import ModalDialog from './ConfirmationDialog';
import { DEFAULT_OPTIONS } from './constants';
import { ModalOptions } from './types';

interface ModalContextValue {
  update: (id: string, options?: ModalOptions) => void;
  clear: (id: string) => void;
  open: (id: string) => Promise<void>;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

const buildOptions = (
  defaultOptions: ModalOptions = DEFAULT_OPTIONS,
  options?: ModalOptions,
): ModalOptions => {
  const dialogProps = {
    ...(defaultOptions.dialogProps || DEFAULT_OPTIONS.dialogProps),
    ...(options?.dialogProps || {}),
  };
  const confirmationButtonProps = {
    ...(defaultOptions.confirmationButtonProps ||
      DEFAULT_OPTIONS.confirmationButtonProps),
    ...(options?.confirmationButtonProps || {}),
  };
  const cancellationButtonProps = {
    ...(defaultOptions.cancellationButtonProps ||
      DEFAULT_OPTIONS.cancellationButtonProps),
    ...(options?.cancellationButtonProps || {}),
  };
  const titleProps = {
    ...(defaultOptions.titleProps || DEFAULT_OPTIONS.titleProps),
    ...(options?.titleProps || {}),
  };
  const contentProps = {
    ...(defaultOptions.contentProps || DEFAULT_OPTIONS.contentProps),
    ...(options?.contentProps || {}),
  };

  return {
    ...DEFAULT_OPTIONS,
    ...defaultOptions,
    ...options,
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
    titleProps,
    contentProps,
  };
};

interface ModalProviderProps {
  children: React.ReactNode;
  defaultOptions?: ModalOptions;
}

export const ModalProvider = ({
  children,
  defaultOptions = DEFAULT_OPTIONS,
}: ModalProviderProps) => {
  const [state, setState] = useState<Record<string, ModalOptions>>({});

  const handleOpen = useCallback((id: string) => {
    return new Promise<void>((resolve, reject) => {
      setState((state) => {
        return {
          ...state,
          [id]: { ...state[id], open: true, resolve, reject },
        };
      });
    });
  }, []);

  const handleUpdate = useCallback(
    (id: string, options?: ModalOptions) => {
      setState((state) => {
        return {
          ...state,
          [id]: {
            ...buildOptions(defaultOptions, options),
            open: state[id]?.open ?? false,
            resolve: state[id]?.resolve,
            reject: state[id]?.reject,
          },
        };
      });
    },
    [defaultOptions],
  );

  const handleClear = useCallback((id: string) => {
    setState((state) => {
      delete state[id];
      return state;
    });
  }, []);

  const handleClose = useCallback((id: string) => {
    setState((state) => {
      return { ...state, [id]: { ...state[id], open: false } };
    });
  }, []);

  const value = useMemo(
    () => ({
      open: handleOpen,
      update: handleUpdate,
      clear: handleClear,
    }),
    [handleUpdate, handleOpen, handleClear],
  );

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      {Object.keys(state).map((id) => (
        <ModalDialog
          key={id}
          open={Boolean(state[id].open)}
          options={state[id]}
          onClose={() => handleClose(id)}
          onCancel={() => {
            state[id].reject?.();
            handleClose(id);
          }}
          onConfirm={() => {
            state[id].resolve?.();
            handleClose(id);
          }}
        />
      ))}
    </>
  );
};
