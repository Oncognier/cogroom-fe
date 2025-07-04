'use client';

import Kakao from '@/assets/icons/kakao.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { KAKAO_AUTH_API_URL } from '@/constants/api';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './Login.styled';

export default function Login() {
  const { close } = useAppModalStore();

  const handleClick = () => {
    window.location.href = KAKAO_AUTH_API_URL;
    close();
  };

  return (
    <>
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
        size='md'
        color='kakao'
        interactionVariant='normal'
        iconLeft={<Kakao />}
        onClick={handleClick}
        fillContainer
      />
    </>
  );
}
