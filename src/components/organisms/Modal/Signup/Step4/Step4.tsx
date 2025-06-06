'use client';

import { useFormContext } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useSignupMutation } from '@/hooks/api/auth/useSignup';
import { useModalStore } from '@/stores/useModalStore';

import S from './Step4.styled';

export interface Step4Props {
  provider: string;
  providerId: string;
  nickname: string;
}

export default function Step4({ provider, providerId, nickname }: Step4Props) {
  const { signup } = useSignupMutation();
  const { close } = useModalStore();
  const { getValues } = useFormContext<{ email: string }>();
  const email = getValues('email');

  const handleGo = () => {
    signup({ provider, providerId, email, nickname });
    close();
  };

  return (
    <>
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>가입이 완료되었어요</S.SubTitle>
          <S.Title>코그룸에 오신걸 환영해요</S.Title>
        </S.TitleWrapper>
        <S.Description>
          코그룸은 단순한 학습이 아닌
          <br />
          나를 알아가고 이해하는 여정을 제공합니다
        </S.Description>
      </S.TextWrapper>

      <SolidButton
        label='코그룸 살펴보기'
        size='fillContainer'
        color='primary'
        interactionVariant='normal'
        onClick={handleGo}
      />
    </>
  );
}
