'use client';

import { useModalStore } from '@/stores/useModalStore';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { modalComponents } from '../modalConfig';
import S from './Base.styled';

export default function Base() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isOpen, modalType, modalProps, close } = useModalStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    else if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  if (!isMounted || !isOpen || !modalType) return null;

  const config = modalComponents[modalType];
  if (!config) return null;

  const { Component, disableOutsideClick } = config;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!disableOutsideClick && dialogRef.current === e.target) close();
  };

  return createPortal(
    <S.ModalOverlay
      ref={dialogRef}
      onClick={handleOutsideClick}
    >
      <Component {...modalProps} />
    </S.ModalOverlay>,
    document.getElementById('modal-root')!,
  );
}
