'use client';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Kakao from '@/assets/icons/kakao.svg';
import X from '@/assets/icons/x.svg';
import S from './Login.styled';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useModalStore } from '@/stores/useModalStore';
import { KAKAO_AUTH_API_URL } from '@/constants/api';

export default function Login() {
  const { close } = useModalStore();

  const handleClick = () => {
    window.location.href = KAKAO_AUTH_API_URL;
    close();
  };

  return (
    <S.Container>
      <S.Close>
        <IconButton
          size='4rem'
          variant='normal'
          interactionVariant='normal'
        >
          <X />
        </IconButton>
      </S.Close>

      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>모든이의 내적성장을 돕습니다</S.SubTitle>
          <S.Title>코그룸 시작하기</S.Title>
        </S.TitleWrapper>
        <S.Description>
          코그룸은 단순한 학습이 아닌
          <br />
          나를 알아가고 이해하는 여정을 제공합니다
        </S.Description>
      </S.TextWrapper>

      <SolidButton
        label='카카오로 시작하기'
        size='fillContainer'
        color='kakao'
        interactionVariant='normal'
        iconLeft={<Kakao />}
        onClick={handleClick}
      />
    </S.Container>
  );
}
