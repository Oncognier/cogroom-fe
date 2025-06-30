'use client';

import React from 'react';

import Base from '@/components/organisms/Modal/Base/Base';
import { AlertModalRegistry, AppModalRegistry } from '@/components/organisms/Modal/modalConfig';
import AlertModal from '@/components/organisms/Modal/templates/AlertModal/AlertModal';
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
        wrapper={AlertModal}
      />
      <div id='modal-root' />
    </>
  );
}
