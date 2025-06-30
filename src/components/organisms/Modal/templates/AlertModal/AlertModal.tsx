import React from 'react';

import type { ModalWrapperProps } from '@/types/modal';

import * as S from './AlertModal.styled';

export default function AlertModal({ children }: ModalWrapperProps) {
  return <S.AlertModal>{children}</S.AlertModal>;
}
