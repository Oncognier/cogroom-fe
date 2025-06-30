'use client';

import ArrowRight from '@/assets/icons/arrowright.svg';

import * as S from './FirstAnswerButton.styled';

interface FirstAnswerButtonProps {
  onClick?: () => void;
}

export default function FirstAnswerButton({ onClick }: FirstAnswerButtonProps) {
  return (
    <S.ButtonWrapper onClick={onClick}>
      리포트 보러가기
      <S.Icon>
        <ArrowRight />
      </S.Icon>
    </S.ButtonWrapper>
  );
}
