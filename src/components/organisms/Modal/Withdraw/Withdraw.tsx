'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { WITHDRAW_STEP, WithdrawStep } from '@/constants/common';
import { WithdrawFormFields } from '@/types/form';

import { SupportContact, ConfirmWithdraw, InputReason, WithdrawComplete } from './Steps';

export default function Withdraw() {
  const [step, setStep] = useState<WithdrawStep>(WITHDRAW_STEP.SUPPORT_CONTACT);

  const methods = useForm<WithdrawFormFields>({
    mode: 'onChange',
    defaultValues: { reason: '' },
  });

  const handleComplete = () => {
    const reason = methods.getValues('reason');
    console.log('탈퇴 사유:', reason);
  };

  return (
    <FormProvider {...methods}>
      {step === WITHDRAW_STEP.SUPPORT_CONTACT && (
        <SupportContact onStartWithdraw={() => setStep(WITHDRAW_STEP.CONFIRM)} />
      )}

      {step === WITHDRAW_STEP.CONFIRM && <ConfirmWithdraw onConfirm={() => setStep(WITHDRAW_STEP.INPUT_REASON)} />}

      {step === WITHDRAW_STEP.INPUT_REASON && <InputReason onConfirm={() => setStep(WITHDRAW_STEP.COMPLETE)} />}

      {step === WITHDRAW_STEP.COMPLETE && <WithdrawComplete onConfirm={handleComplete} />}
    </FormProvider>
  );
}
