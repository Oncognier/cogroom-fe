'use client';

import X from '@/assets/icons/x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useModalStore } from '@/stores/useModalStore';

import * as S from './DailyAnswerEdit.styled';

export default function DailyAnswerEdit() {
  const { close } = useModalStore();

  const handleClick = () => {
    close();
    alert('수정되었습니다.');
  };

  return (
    <S.Container>
      <S.Close>
        <IconButton
          size='4rem'
          variant='normal'
          interactionVariant='normal'
          onClick={handleClick}
        >
          <X />
        </IconButton>
      </S.Close>

      <S.TextWrapper>
        <S.Title>답변을 수정하시겠어요?</S.Title>
      </S.TextWrapper>

      <OutlinedButton
        label='수정하기'
        size='sm'
        color='secondary'
        interactionVariant='normal'
        onClick={handleClick}
        type='submit'
      />
    </S.Container>
  );
}
