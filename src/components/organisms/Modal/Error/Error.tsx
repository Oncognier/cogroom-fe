'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './Error.styled';

export interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  const { close } = useAlertModalStore();

  return (
    <S.Error>
      <S.TextWrapper>
        <S.Title>{message}</S.Title>
        <S.Description>잠시 뒤에 다시 시도해주세요.</S.Description>
      </S.TextWrapper>

      <OutlinedButton
        label='확인'
        size='sm'
        color='assistive'
        interactionVariant='normal'
        onClick={close}
        fillContainer
      />
    </S.Error>
  );
}
