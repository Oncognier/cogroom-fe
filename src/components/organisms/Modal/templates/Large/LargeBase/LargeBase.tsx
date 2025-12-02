import React from 'react';

import X from '@/assets/icons/x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import type { BaseWrapperProps } from '@/types/modal2';

import * as S from './LargeBase.styled';

export default function LargeBase({ onClose, children, showCloseButton = true }: BaseWrapperProps) {
  return (
    <S.LargeBase>
      {showCloseButton && (
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
      )}
      {children}
    </S.LargeBase>
  );
}
