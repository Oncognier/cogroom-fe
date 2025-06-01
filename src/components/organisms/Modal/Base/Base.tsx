'use client';

import { useModalStore } from '@/stores/useModalStore';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalInstance from './ModalInstance/ModalInstance';

export default function Base() {
  const { modals, close } = useModalStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  if (!isMounted || modals.length === 0) return null;

  return createPortal(
    <>
      {modals.map(({ type, props }, index) => (
        <ModalInstance
          key={index}
          type={type}
          props={props}
          onClose={close}
          zIndex={1000 + index}
        />
      ))}
    </>,
    document.getElementById('modal-root')!,
  );
}
