/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

import type { ModalMap } from '@/types/modalTypes';

import S from './ModalInstance.styled';

interface ModalInstanceProps<T extends ModalMap<any>, K extends keyof T = keyof T> {
  type: K;
  props: Parameters<T[K]['Component']>[0];
  onClose: () => void;
  zIndex: number;
  modalMap: T;
}

export default function ModalInstance<T extends ModalMap<any>, K extends keyof T>({
  type,
  props,
  onClose,
  zIndex,
  modalMap,
}: ModalInstanceProps<T, K>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const config = modalMap[type];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  if (!config) return null;
  const { Component, disableOutsideClick } = config;

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
