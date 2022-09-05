import {
  DependencyList,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
} from 'react';

import { ModalContext } from './ModalProvider';
import { ModalOptions } from './types';

export const useModal = (
  options?: Omit<ModalOptions, 'resolve' | 'reject'>,
  deps: DependencyList = [],
): (() => Promise<void>) => {
  const id = useId();
  const handlers = useContext(ModalContext);

  if (!handlers) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedOptions = useMemo(() => options, deps);

  const openModalHandler = useCallback(() => {
    return handlers.open?.(id);
  }, [id, handlers]);

  useEffect(() => {
    handlers?.update?.(id, memoizedOptions);
  }, [id, memoizedOptions, handlers]);

  useEffect(
    () => () => {
      handlers?.clear?.(id);
    },
    [id, handlers],
  );

  return openModalHandler;
};
