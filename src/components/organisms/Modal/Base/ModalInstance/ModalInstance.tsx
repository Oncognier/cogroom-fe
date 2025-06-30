/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useRef } from 'react';

import { useZIndexStore } from '@/stores/useZIndexStore';
import type { ModalMap, ComponentPropsOf, ModalWrapperProps } from '@/types/modal';

import * as S from './ModalInstance.styled';

interface ModalInstanceProps<T extends ModalMap<any>, K extends keyof T = keyof T> {
  type: K;
  props: ComponentPropsOf<T[K]['Component']>;
  onClose: () => void;
  modalMap: T;
  wrapper: React.ComponentType<ModalWrapperProps>;
}

export default function ModalInstance<T extends ModalMap<any>, K extends keyof T>({
  type,
  props,
  onClose,
  modalMap,
  wrapper: Wrapper,
}: ModalInstanceProps<T, K>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const getNextZ = useZIndexStore((s) => s.getNext);
  const zIndex = useRef(getNextZ());

  const { Component, disableOutsideClick } = modalMap[type];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  const onBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!disableOutsideClick && e.target === dialogRef.current) onClose();
  };

  return (
    <S.ModalOverlay
      ref={dialogRef}
      onClick={onBackdrop}
      $zIndex={zIndex.current}
    >
      <Wrapper onClose={onClose}>
        <Component {...(props ?? {})} />
      </Wrapper>
    </S.ModalOverlay>
  );
}
