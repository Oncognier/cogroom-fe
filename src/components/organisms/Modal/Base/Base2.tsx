/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { ModalMap2, ModalOptions, BaseWrapperProps, ComponentPropsOf } from '@/types/modal2';

import ModalInstance2 from './ModalInstance/ModalInstance2';

interface BaseProps2<T extends ModalMap2<any>> {
  modalMap: T;
  useModalStore: () => {
    modals: Array<{ type: keyof T; props: unknown }>;
    close: () => void;
  };
  wrapper?: React.ComponentType<BaseWrapperProps>;
}

export default function Base2<T extends ModalMap2<any>>({
  modalMap,
  useModalStore,
  wrapper: DefaultWrapper,
}: BaseProps2<T>) {
  const store = useModalStore();
  const [mounted, setMounted] = useState(false);

  // ESC 닫기 로직 (closable 옵션 및 onBeforeClose 실행)
  useEffect(() => {
    setMounted(true);
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const topModal = store.modals[store.modals.length - 1];
        if (!topModal) return;

        const options = (topModal.props ?? {}) as ModalOptions;
        const { closable = true, onBeforeClose } = options;

        if (closable) {
          onBeforeClose?.(); // 닫히기 직전에 이벤트 실행
          store.close();
        }
      }
    };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [store]);

  if (!mounted || store.modals.length === 0) return null;

  const root = document.getElementById('modal-root-2');
  if (!root) return null;

  return createPortal(
    <>
      {store.modals.map(({ type, props }, i) => (
        <ModalInstance2
          key={i}
          type={type}
          props={props as ComponentPropsOf<T[typeof type]['Component']>}
          onClose={store.close}
          modalMap={modalMap}
          wrapper={DefaultWrapper}
        />
      ))}
    </>,
    root,
  );
}
