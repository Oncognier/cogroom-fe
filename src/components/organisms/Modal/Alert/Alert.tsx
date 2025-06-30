'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './Alert.styled';

export interface AlertProps {
  message: string;
}

export default function Alert({ message }: AlertProps) {
  const { close } = useAlertModalStore();

  return (
    <S.Alert>
      <S.Title>{message}</S.Title>

      <OutlinedButton
        label='확인'
        size='sm'
        color='assistive'
        interactionVariant='normal'
        onClick={close}
        fillContainer
      />
    </S.Alert>
  );
}
