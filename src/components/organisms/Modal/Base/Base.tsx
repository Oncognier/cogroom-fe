/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useModalStore as defaultUseModalStore } from '@/stores/useModalStore';
import type { ModalMap } from '@/types/modal';

import ModalInstance from './ModalInstance/ModalInstance';

interface BaseProps<T extends ModalMap<any>> {
  modalMap: T;
  useModalStore?: () => {
    modals: Array<{ type: string; props: unknown }>;
    close: () => void;
  };
}

export default function Base<T extends ModalMap<any>>({
  modalMap,
  useModalStore = defaultUseModalStore,
}: BaseProps<T>) {
  const store = useModalStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') store.close();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [store]);

  if (!isMounted || store.modals.length === 0) return null;

  const portalTarget = document.getElementById('modal-root');
  if (!portalTarget) return null;

  return createPortal(
    <>
      {store.modals.map(({ type, props }, index) => (
        <ModalInstance
          key={index}
          type={type}
          props={props}
          onClose={store.close}
          zIndex={1000 + index}
          modalMap={modalMap}
        />
      ))}
    </>,
    portalTarget,
  );
}
