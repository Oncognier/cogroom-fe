'use client';

import { useState } from 'react';

import X from '@/assets/icons/x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useModalStore } from '@/stores/useModalStore';

import S from './Signup.styled';
import Step1 from './Step1/Step1';

export interface SignupProps {
  email: string;
  nickname: string;
}


export default function Signup({ email, nickname }: SignupProps) {
  const { close } = useModalStore();
  const [step, setStep] = useState(1);


  const handleConfirmEmail = async () => setStep(3);
  const handleUseAnotherEmail = () => setStep(2);

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
      </S.Container>
    </FormProvider>
  );
}
