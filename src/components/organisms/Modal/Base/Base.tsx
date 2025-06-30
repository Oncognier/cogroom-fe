/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { ModalMap, ComponentPropsOf, ModalWrapperProps } from '@/types/modal';

import ModalInstance from './ModalInstance/ModalInstance';

interface BaseProps<T extends ModalMap<any>> {
  modalMap: T;
  useModalStore: () => {
    modals: Array<{ type: keyof T; props: unknown }>;
    close: () => void;
  };
  wrapper: React.ComponentType<ModalWrapperProps>;
}

export default function Base<T extends ModalMap<any>>({ modalMap, useModalStore, wrapper }: BaseProps<T>) {
  const store = useModalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && store.close();
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [store]);

  if (!mounted || store.modals.length === 0) return null;

  const root = document.getElementById('modal-root');
  if (!root) return null;

  return createPortal(
    <>
      {store.modals.map(({ type, props }, i) => (
        <ModalInstance
          key={i}
          type={type}
          props={props as ComponentPropsOf<T[typeof type]['Component']>}
          onClose={store.close}
          modalMap={modalMap}
          wrapper={wrapper}
        />
      ))}
    </>,
    root,
  );
}
