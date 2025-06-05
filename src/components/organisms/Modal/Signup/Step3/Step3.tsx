'use client';

import { useEffect, useState } from 'react';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmailMutation';
import { useEmailVerificationStatusMutation } from '@/hooks/api/auth/useEmailVerificationStatus';
import S from './Step3.styled';

export interface Step3Props {
  email: string;
  onConfirm: () => void;
}

export default function Step3({ email, onConfirm }: Step3Props) {
  const { mutateSendEmail } = useSendEmailMutation();
  const { mutateEmailVerificationStatus } = useEmailVerificationStatusMutation(onConfirm);

  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsConfirmDisabled(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    mutateEmailVerificationStatus({ email });
  };

  const handleResend = () => {
    mutateSendEmail({ email });
    setIsResendDisabled(true);

    const timer = setTimeout(() => setIsResendDisabled(false), 3000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>메일함을 확인해주세요</S.SubTitle>
          <S.Title>인증 메일이 발송됐어요</S.Title>
        </S.TitleWrapper>
        <S.Description>
          이메일 내 인증 링크 클릭 후
          <br />
          인증 확인 버튼을 누르면 가입이 완료됩니다
        </S.Description>
      </S.TextWrapper>

      <S.ButtonWrapper>
        <SolidButton
          label='인증 완료하기'
          size='fillContainer'
          color='primary'
          interactionVariant='normal'
          onClick={handleComplete}
          isDisabled={isConfirmDisabled}
        />
        <TextButton
          label='메일 재전송'
          size='fillContainer'
          color='assistive'
          interactionVariant='normal'
          onClick={handleResend}
          isDisabled={isResendDisabled}
        />
      </S.ButtonWrapper>
    </>
  );
}
