import React from 'react';

import X from '@/assets/icons/x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import type { ModalWrapperProps } from '@/types/modal';

import * as S from './SimpleModal.styled';

export default function SimpleModal({ onClose, children }: ModalWrapperProps) {
  return (
    <S.Container>
      <S.Close>
        <IconButton
          size='4rem'
          variant='normal'
          interactionVariant='normal'
          onClick={onClose}
        >
          <X />
        </IconButton>
      </S.Close>
      {children}
    </S.Container>
  );
}
