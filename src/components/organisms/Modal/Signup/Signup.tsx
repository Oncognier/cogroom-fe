'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { SIGNUP_STEP, SignupStep } from '@/constants/common';
import { useSignupMutation } from '@/hooks/api/auth/useSignup';
import { SignupFormFields } from '@/types/form';

import { CheckEmail, InputEmail, VerifyEmail, Complete } from './Steps';

export interface SignupProps {
  provider: string;
  signupToken: string;
  email: string;
}

export default function Signup({ provider, signupToken, email }: SignupProps) {
  const [step, setStep] = useState<SignupStep>(SIGNUP_STEP.CHECK_ORIGINAL_EMAIL);

  const methods = useForm<SignupFormFields>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const { signup } = useSignupMutation(() => setStep(SIGNUP_STEP.COMPLETE));

  const handleVerifiedAndSignup = () => {
    signup({ provider, signupToken, email: methods.getValues('email') });
  };

  return (
    <FormProvider {...methods}>
      {step === SIGNUP_STEP.CHECK_ORIGINAL_EMAIL && (
        <CheckEmail
          email={email}
          provider={provider}
          onConfirm={() => setStep(SIGNUP_STEP.VERIFY_EMAIL)}
          onChangeEmail={() => setStep(SIGNUP_STEP.INPUT_NEW_EMAIL)}
        />
      )}

      {step === SIGNUP_STEP.INPUT_NEW_EMAIL && <InputEmail onConfirm={() => setStep(SIGNUP_STEP.VERIFY_EMAIL)} />}

      {step === SIGNUP_STEP.VERIFY_EMAIL && (
        <VerifyEmail
          onConfirm={handleVerifiedAndSignup}
          onChangeEmail={() => setStep(SIGNUP_STEP.INPUT_NEW_EMAIL)}
        />
      )}

      {step === SIGNUP_STEP.COMPLETE && <Complete />}
    </FormProvider>
  );
}
