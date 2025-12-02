import React from 'react';

import { ModalOptions } from '@/types/modal2';

import * as S from './Alert.styled';
import { ButtonProps } from '../../../modalConfig2';

export interface AlertSmallModalProps extends ModalOptions {
  [key: string]: unknown;

  title: string;
  description: string;
  button: ButtonProps;
  buttonColor: 'primary' | 'assistive';
}

export default function AlertSmall({ title, description, button, buttonColor }: AlertSmallModalProps) {
  return (
    <S.Alert>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Alert>
  );
}
