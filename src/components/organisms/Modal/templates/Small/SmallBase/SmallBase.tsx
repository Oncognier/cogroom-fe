import React from 'react';

import X from '@/assets/icons/x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import type { BaseWrapperProps } from '@/types/modal2';

import * as S from './SmallBase.styled';

export default function SmallBase({ onClose, children, showCloseButton = true }: BaseWrapperProps) {
  return (
    <S.SmallBase>
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
    </S.SmallBase>
  );
}
