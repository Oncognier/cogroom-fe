'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import X from '@/assets/icons/x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useModalStore } from '@/stores/useModalStore';

import S from './Signup.styled';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';

export interface SignupProps {
  provider: string;
  providerId: string;
  email: string;
  nickname: string;
}

interface SignupFormFields {
  email: string;
}

const STEP = {
  CHECK_ORIGINAL_EMAIL: 'CHECK_ORIGINAL_EMAIL',
  INPUT_NEW_EMAIL: 'INPUT_NEW_EMAIL',
  VERIFY_EMAIL: 'VERIFY_EMAIL',
  COMPLETE: 'COMPLETE',
} as const;

type Step = (typeof STEP)[keyof typeof STEP];

export default function Signup({ provider, providerId, email, nickname }: SignupProps) {
  const { close } = useModalStore();
  const [step, setStep] = useState<Step>(STEP.CHECK_ORIGINAL_EMAIL);

  const methods = useForm<SignupFormFields>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const handleConfirmEmail = () => setStep(STEP.VERIFY_EMAIL);
  const handleUseAnotherEmail = () => setStep(STEP.INPUT_NEW_EMAIL);
  const handleCompleteEmail = () => setStep(STEP.COMPLETE);

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

        {step === STEP.CHECK_ORIGINAL_EMAIL && (
          <Step1
            email={email}
            onConfirm={handleConfirmEmail}
            onChangeEmail={handleUseAnotherEmail}
          />
        )}
        {step === STEP.INPUT_NEW_EMAIL && (
          <Step2
            email={email}
            onConfirm={handleConfirmEmail}
          />
        )}
        {step === STEP.VERIFY_EMAIL && <Step3 onConfirm={handleCompleteEmail} />}
        {step === STEP.COMPLETE && (
          <Step4
            provider={provider}
            providerId={providerId}
            nickname={nickname}
          />
        )}
      </S.Container>
    </FormProvider>
  );
}
