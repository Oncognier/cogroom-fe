'use client';

import React from 'react';

import Base2 from '@/components/organisms/Modal/Base/Base2';
import { LargeModalRegistry, MediumModalRegistry, SmallModalRegistry } from '@/components/organisms/Modal/modalConfig2';
import LargeBase from '@/components/organisms/Modal/templates/Large/LargeBase/LargeBase';
import MediumBase from '@/components/organisms/Modal/templates/Medium/MediumBase/MediumBase';
import SmallBase from '@/components/organisms/Modal/templates/Small/SmallBase/SmallBase';
import { useLargeModalStore, useMediumModalStore, useSmallModalStore } from '@/stores/useModalStore2';

export default function ModalProvider2() {
  const largeStore = useLargeModalStore();
  const mediumStore = useMediumModalStore();
  const smallStore = useSmallModalStore();

  return (
    <>
      <Base2
        modalMap={LargeModalRegistry}
        useModalStore={() => largeStore}
        wrapper={LargeBase}
      />

      <Base2
        modalMap={MediumModalRegistry}
        useModalStore={() => mediumStore}
        wrapper={MediumBase}
      />

      <Base2
        modalMap={SmallModalRegistry}
        useModalStore={() => smallStore}
        wrapper={SmallBase}
      />

      <div id='modal-root-2' />
    </>
  );
}
