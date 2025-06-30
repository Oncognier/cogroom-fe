'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './DailyFirstAnswer.styled';

export default function DailyFirstAnswer() {
  const { close } = useAppModalStore();

  return (
    <S.Container>
      <S.TextWrapper>
        <S.Title>작성한 답변은 오늘 자정까지만 바꿀 수 있어요</S.Title>
      </S.TextWrapper>

      <OutlinedButton
        label='확인했어요'
        size='sm'
        color='assistive'
        interactionVariant='normal'
        onClick={close}
        type='submit'
      />
    </S.Container>
  );
}
