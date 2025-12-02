import React from 'react';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { ModalOptions } from '@/types/modal2';

import * as S from './Alert.styled';
import { ButtonProps } from '../../../modalConfig2';

export interface AlertMediumModalProps extends ModalOptions {
  [key: string]: unknown;

  title: string;
  description: string;
  button: ButtonProps;
  buttonColor: 'primary' | 'assistive';
}

export default function AlertMedium({ title, description, button, buttonColor }: AlertMediumModalProps) {
  return (
    <S.Alert>
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextWrapper>

      <OutlinedButton
        size='lg'
        label={button.label}
        color={buttonColor}
        interactionVariant='normal'
        fillContainer
        onClick={button.onClick}
      />
    </S.Alert>
  );
}
