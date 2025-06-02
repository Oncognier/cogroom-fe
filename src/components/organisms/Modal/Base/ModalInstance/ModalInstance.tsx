import { useEffect, useRef } from 'react';

import type { ModalPropsMap, ModalType } from '@/stores/useModalStore';

import S from './ModalInstance.styled';
import { ModalRegistry } from '../../modalConfig';

interface ModalInstanceProps<T extends ModalType> {
  type: T;
  props: ModalPropsMap[T];
  onClose: () => void;
  zIndex: number;
  modalMap: ModalRegistry;
}

export default function ModalInstance<T extends ModalType>({
  type,
  props,
  onClose,
  zIndex,
  modalMap,
}: ModalInstanceProps<T>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const config = modalMap[type];

  const { Component, disableOutsideClick } = config;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, []);

  if (!config) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!disableOutsideClick && e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <S.ModalOverlay
      ref={dialogRef}
      onClick={handleOutsideClick}
      $zIndex={zIndex}
    >
      <Component {...props} />
    </S.ModalOverlay>
  );
}
