'use client';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { useCheckEmailVerifiedMutation } from '@/hooks/api/auth/useEmailVerificationStatus';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmail';
import { useCooldown } from '@/hooks/useCooldown';

import S from './VerifyEmail.styled';

export interface VerifyEmailProps {
  onConfirm: () => void;
}

export default function VerifyEmail({ onConfirm }: VerifyEmailProps) {
  const { getValues } = useFormContext<{ email: string }>();

  const { sendEmail } = useSendEmailMutation();
  const { checkEmailVerified } = useCheckEmailVerifiedMutation(onConfirm);

  const { value: isConfirmDisabled, start: startConfirmCooldown } = useCooldown(3000);
  const { value: isResendDisabled, start: startResendCooldown } = useCooldown(3000);

  useEffect(() => {
    startConfirmCooldown();
  }, []);

  const handleComplete = () => {
    checkEmailVerified({ email: getValues('email') });
  };

  const handleResend = () => {
    sendEmail({ email: getValues('email') });
    startResendCooldown();
  };

  return (
    <>
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>메일함을 확인해주세요</S.SubTitle>
          <S.Title>인증 메일이 발송됐어요</S.Title>
        </S.TitleWrapper>
        <S.Description>
          이메일 내 인증 링크 클릭 후<br />
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
          size='sm'
          color='assistive'
          interactionVariant='normal'
          onClick={handleResend}
          isDisabled={isResendDisabled}
        />
      </S.ButtonWrapper>
    </>
  );
}
