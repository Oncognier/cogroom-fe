'use client';

import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './ActionBanner.styled';

export default function ActionBanner() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { open } = useAppModalStore();

  const handleClick = () => {
    open('login');
  };

  return (
    <>
      {!isLoggedIn && (
        <S.Container>
          <S.Wrapper>
            <S.TextWrapper>지금 나만의 코그룸을 만들어보세요</S.TextWrapper>
            <S.ButtonWrapper onClick={handleClick}>코그룸 시작하기</S.ButtonWrapper>
          </S.Wrapper>
        </S.Container>
      )}
    </>
  );
}
