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

export interface SignupProps {
  email: string;
  nickname: string;
}

interface FormValues {
  email: string;
}

export default function Signup({ email, nickname }: SignupProps) {
  const { close } = useModalStore();
  const [step, setStep] = useState(1);

  const methods = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const handleConfirmEmail = () => setStep(3);
  const handleUseAnotherEmail = () => setStep(2);
  const handleCompleteEmail = () => setStep(4);

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

        {step === 1 && (
          <Step1
            email={email}
            onConfirm={handleConfirmEmail}
            onChangeEmail={handleUseAnotherEmail}
          />
        )}
        {step === 2 && (
          <Step2
            email={email}
            onConfirm={handleConfirmEmail}
          />
        )}
        {step === 3 && (
          <Step3
            email={email}
            onConfirm={handleCompleteEmail}
          />
        )}
      </S.Container>
    </FormProvider>
  );
}
