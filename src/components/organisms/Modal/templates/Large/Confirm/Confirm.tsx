import React from 'react';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { ModalOptions } from '@/types/modal2';

import * as S from './Confirm.styled';
import { ButtonProps } from '../../../modalConfig2';

export interface ConfirmLargeModalProps extends ModalOptions {
  [key: string]: unknown;

  title: string;
  description: string;
  primaryButton: ButtonProps;
  assistiveButton?: ButtonProps;
}

export default function ConfirmLarge({ title, description, primaryButton, assistiveButton }: ConfirmLargeModalProps) {
  return (
    <S.Confirm>
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextWrapper>

      <S.ButtonWrapper>
        {assistiveButton && (
          <OutlinedButton
            size='lg'
            label={assistiveButton.label}
            color='assistive'
            interactionVariant='normal'
            fillContainer
            onClick={assistiveButton.onClick}
          />
        )}

        <OutlinedButton
          size='lg'
          label={primaryButton.label}
          color='primary'
          interactionVariant='normal'
          fillContainer
          onClick={primaryButton.onClick}
        />
      </S.ButtonWrapper>
    </S.Confirm>
  );
}
