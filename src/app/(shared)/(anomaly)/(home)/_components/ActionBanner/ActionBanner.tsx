'use client';

import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './ActionBanner.styled';

export default function ActionBanner() {
  const { open } = useAppModalStore();
  const status = useAuthStore((s) => s.status);

  const handleClick = () => {
    open('login');
  };

  if (status !== 'authenticated') return null;

  return (
    <S.Container>
      <S.Wrapper>
        <S.TextWrapper>지금 나만의 코그룸을 만들어보세요</S.TextWrapper>
        <S.ButtonWrapper onClick={handleClick}>코그룸 시작하기</S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
