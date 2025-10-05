'use client';

import React from 'react';

import Base from '@/components/organisms/Modal/Base/Base';
import { AlertModalRegistry, AppModalRegistry, SimpleModalRegistry } from '@/components/organisms/Modal/modalConfig';
import AlertModal from '@/components/organisms/Modal/templates/AlertModal/AlertModal';
import AppModal from '@/components/organisms/Modal/templates/AppModal/AppModal';
import SimpleModal from '@/components/organisms/Modal/templates/SimpleModal/SimpleModal';
import { useAlertModalStore, useAppModalStore, useSimpleModalStore } from '@/stores/useModalStore';

export default function ModalProvider() {
  const appModalStore = useAppModalStore();
  const alertModalStore = useAlertModalStore();
  const simpleModalStore = useSimpleModalStore();

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
      <Base
        modalMap={SimpleModalRegistry}
        useModalStore={() => simpleModalStore}
        wrapper={SimpleModal}
      />
      <div id='modal-root' />
    </>
  );
}
