'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { useGetEmailStatusQuery } from '@/hooks/api/auth/useGetEmailStatus';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmail';
import { useCooldown } from '@/hooks/useCooldown';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './VerifyEmail.styled';

export interface VerifyEmailProps {
  onConfirm: () => void;
  onChangeEmail: () => void;
}

export default function VerifyEmail({ onConfirm, onChangeEmail }: VerifyEmailProps) {
  const { getValues } = useFormContext<{ email: string }>();
  const { sendEmail } = useSendEmailMutation();
  const { open } = useAlertModalStore();

  const [shouldFetch, setShouldFetch] = useState(false);
  const email = getValues('email');

  const { data, refetch, isFetching } = useGetEmailStatusQuery(email, shouldFetch);

  const { value: isConfirmDisabled, start: startConfirmCooldown } = useCooldown(3000);
  const { value: isResendDisabled, start: startResendCooldown } = useCooldown(3000);

  useEffect(() => {
    if (shouldFetch) {
      refetch().then((res) => {
        if (res.data) {
          onConfirm();
        } else {
          open('error', { message: '이메일 인증에 실패했습니다.' });
        }
        setShouldFetch(false);
      });
    }
  }, [shouldFetch]);

  useEffect(() => {
    startConfirmCooldown();
  }, []);

  const handleComplete = () => {
    setShouldFetch(true);
  };

  const handleResend = () => {
    sendEmail({ email });
    startResendCooldown();
  };

  return (
    <>
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>인증 메일이 발송됐어요</S.SubTitle>
          <S.Title>10분 내 인증을 완료해주세요</S.Title>
        </S.TitleWrapper>
        <S.Description>
          이메일 내 인증 링크 클릭 후<br />
          인증 확인 버튼을 누르면 가입이 완료됩니다
        </S.Description>
      </S.TextWrapper>

      <S.ButtonWrapper>
        <SolidButton
          label={isFetching ? '확인 중...' : '인증 완료하기'}
          size='md'
          color='primary'
          interactionVariant='normal'
          onClick={handleComplete}
          isDisabled={isConfirmDisabled || isFetching}
          fillContainer
        />
        <TextButton
          label='메일 재전송'
          size='sm'
          color='assistive'
          interactionVariant='normal'
          onClick={handleResend}
          isDisabled={isResendDisabled}
        />
        <TextButton
          label='다른 이메일 사용'
          size='sm'
          color='assistive'
          interactionVariant='normal'
          onClick={onChangeEmail}
        />
      </S.ButtonWrapper>
    </>
  );
}
