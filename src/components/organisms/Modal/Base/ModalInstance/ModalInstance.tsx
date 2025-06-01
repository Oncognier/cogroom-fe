import type { ModalPropsMap, ModalType } from '@/stores/useModalStore';
import { useEffect, useRef } from 'react';
import { modalComponents } from '../../modalConfig';
import S from './ModalInstance.styled';

interface ModalInstanceProps<T extends ModalType> {
  type: T;
  props: ModalPropsMap[T];
  onClose: () => void;
  zIndex: number;
}

export default function ModalInstance<T extends ModalType>({ type, props, onClose, zIndex }: ModalInstanceProps<T>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const config = modalComponents[type];
  if (!config) return null;

  const { Component, disableOutsideClick } = config;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, []);

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
