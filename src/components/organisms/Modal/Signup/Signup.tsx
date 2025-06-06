'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import X from '@/assets/icons/x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { SIGNUP_STEP, SignupStep } from '@/constants/common';
import { useModalStore } from '@/stores/useModalStore';

import S from './Signup.styled';
import { CheckEmail, InputEmail, VerifyEmail, Complete } from './Steps';

export interface SignupProps {
  provider: string;
  providerId: string;
  email: string;
  nickname: string;
}

interface SignupFormFields {
  email: string;
}

export default function Signup({ provider, providerId, email, nickname }: SignupProps) {
  const { close } = useModalStore();
  const [step, setStep] = useState<SignupStep>(SIGNUP_STEP.CHECK_ORIGINAL_EMAIL);

  const methods = useForm<SignupFormFields>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  return (
    <FormProvider {...methods}>
      <S.Container>
        <S.Close>
          <IconButton
            size='4rem'
            variant='normal'
            interactionVariant='normal'
            onClick={close}
          >
            <X />
          </IconButton>
        </S.Close>

        {step === SIGNUP_STEP.CHECK_ORIGINAL_EMAIL && (
          <CheckEmail
            email={email}
            onConfirm={() => setStep(SIGNUP_STEP.VERIFY_EMAIL)}
            onChangeEmail={() => setStep(SIGNUP_STEP.INPUT_NEW_EMAIL)}
          />
        )}

        {step === SIGNUP_STEP.INPUT_NEW_EMAIL && (
          <InputEmail
            email={email}
            onConfirm={() => setStep(SIGNUP_STEP.VERIFY_EMAIL)}
          />
        )}

        {step === SIGNUP_STEP.VERIFY_EMAIL && <VerifyEmail onConfirm={() => setStep(SIGNUP_STEP.COMPLETE)} />}

        {step === SIGNUP_STEP.COMPLETE && (
          <Complete
            provider={provider}
            providerId={providerId}
            nickname={nickname}
          />
        )}
      </S.Container>
    </FormProvider>
  );
}
