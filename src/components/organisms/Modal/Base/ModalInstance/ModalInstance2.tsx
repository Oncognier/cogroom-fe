/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useEffect, useRef, useCallback } from 'react';

import { useZIndexStore } from '@/stores/useZIndexStore';
import type { ModalMap2, ModalOptions, ModalComponentProps, ComponentPropsOf, BaseWrapperProps } from '@/types/modal2';

import * as S from './ModalInstance.styled';

interface ModalInstanceProps<T extends ModalMap2<any>, K extends keyof T = keyof T> {
  type: K;
  props: ComponentPropsOf<T[K]['Component']>;
  onClose: () => void;
  modalMap: T;
  wrapper?: React.ComponentType<BaseWrapperProps>;
}

export default function ModalInstance2<T extends ModalMap2<Record<string, ModalComponentProps>>, K extends keyof T>({
  type,
  props,
  onClose,
  modalMap,
  wrapper: DefaultWrapper,
}: ModalInstanceProps<T, K>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const getNextZ = useZIndexStore((s) => s.getNext);
  const zIndex = useRef(getNextZ());

  const { Component, Wrapper: ComponentWrapper } = modalMap[type];

  const FinalWrapper = (ComponentWrapper || DefaultWrapper) as React.ComponentType<BaseWrapperProps>;

  const options = (props ?? {}) as ModalOptions;
  const { closable = true, showCloseButton = true, autoCloseDuration = 0, onBeforeClose } = options;

  const handleClose = useCallback(() => {
    onBeforeClose?.(); // 닫히기 직전에 이벤트 실행
    onClose();
  }, [onBeforeClose, onClose]);

  // 자동 닫기 로직
  useEffect(() => {
    if (autoCloseDuration > 0) {
      const timer = setTimeout(handleClose, autoCloseDuration);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [autoCloseDuration, handleClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  // 백드롭 닫기 로직 (closable 옵션 사용)
  const onBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (closable && e.target === dialogRef.current) handleClose();
  };

  if (!FinalWrapper) {
    return null;
  }

  return (
    <S.ModalOverlay
      ref={dialogRef}
      onClick={onBackdrop}
      $zIndex={zIndex.current}
    >
      <FinalWrapper
        onClose={handleClose}
        showCloseButton={showCloseButton}
      >
        <Component {...(props as ModalComponentProps)} />
      </FinalWrapper>
    </S.ModalOverlay>
  );
}
