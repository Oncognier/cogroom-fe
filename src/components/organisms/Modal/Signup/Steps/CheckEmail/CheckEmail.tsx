'use client';

import { useFormContext } from 'react-hook-form';

import Kakao from '@/assets/icons/kakao.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmail';

import * as S from './CheckEmail.styled';

export interface CheckEmailProps {
  email: string;
  onConfirm: () => void;
  onChangeEmail: () => void;
}

export default function CheckEmail({ email, onConfirm, onChangeEmail }: CheckEmailProps) {
  const { sendEmail } = useSendEmailMutation(onConfirm);
  const { setValue } = useFormContext<{ email: string }>();

  const handleSubmit = () => {
    setValue('email', email);
    sendEmail({ email });
  };

  return (
    <>
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>이메일 주소를 확인해주세요</S.SubTitle>
          <S.Title>이 이메일이 맞나요?</S.Title>
        </S.TitleWrapper>
        <S.EmailWrapper>
          <S.KakaoIcon>
            <Kakao />
          </S.KakaoIcon>
          <S.Email>{email}</S.Email>
        </S.EmailWrapper>
      </S.TextWrapper>

      <S.ButtonWrapper>
        <SolidButton
          label='이 이메일로 시작하기'
          size='md'
          color='primary'
          interactionVariant='normal'
          onClick={handleSubmit}
          fillContainer
        />
        <OutlinedButton
          label='다른 이메일 사용하기'
          size='md'
          color='assistive'
          interactionVariant='normal'
          onClick={onChangeEmail}
          fillContainer
        />
      </S.ButtonWrapper>
    </>
  );
}
