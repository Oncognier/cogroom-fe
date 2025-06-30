'use client';

import React from 'react';

import Base from '@/components/organisms/Modal/Base/Base';
import { AlertModalRegistry, AppModalRegistry } from '@/components/organisms/Modal/modalConfig';
import AppModal from '@/components/organisms/Modal/templates/AppModal/AppModal';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';

export default function ModalProvider() {
  const appModalStore = useAppModalStore();
  const alertModalStore = useAlertModalStore();

  return (
    <>
      <Base
        modalMap={AppModalRegistry}
        useModalStore={() => appModalStore}
        wrapper={AppModal}
      />
      <Base
        modalMap={AlertModalRegistry}
        useModalStore={() => alertModalStore}
        wrapper={AppModal}
      />
      <div id='modal-root' />
    </>
  );
}
