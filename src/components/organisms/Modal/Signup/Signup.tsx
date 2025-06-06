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

          <Step1
        {step === SIGNUP_STEP.CHECK_ORIGINAL_EMAIL && (
            email={email}
            onConfirm={() => setStep(SIGNUP_STEP.VERIFY_EMAIL)}
            onChangeEmail={() => setStep(SIGNUP_STEP.INPUT_NEW_EMAIL)}
          />
        )}
          <Step2

        {step === SIGNUP_STEP.INPUT_NEW_EMAIL && (
            email={email}
            onConfirm={() => setStep(SIGNUP_STEP.VERIFY_EMAIL)}
          />
        )}
        {step === STEP.VERIFY_EMAIL && <Step3 onConfirm={handleCompleteEmail} />}
          <Step4


        {step === SIGNUP_STEP.COMPLETE && (
            provider={provider}
            providerId={providerId}
            nickname={nickname}
          />
        )}
      </S.Container>
    </FormProvider>
  );
}
