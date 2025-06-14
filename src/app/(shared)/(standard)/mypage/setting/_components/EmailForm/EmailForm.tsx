'use client';

import { useFormContext } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Input from '@/components/molecules/Input/Input';
import { useCheckEmailVerifiedMutation } from '@/hooks/api/auth/useEmailVerificationStatus';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmail';
import { useCooldown } from '@/hooks/useCooldown';
import { validateEmail } from '@/utils/validators/userValidators';

import * as S from './EmailForm.styled';
import { EmailState } from '../../page';

interface EmailFormProps {
  emailState: EmailState;
  setEmailState: (state: EmailState) => void;
}

export default function EmailForm({ emailState, setEmailState }: EmailFormProps) {
  const { value: isCooldown, start: startCooldown } = useCooldown(3000);

  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<{ email: string }>();

  const { sendEmail } = useSendEmailMutation(() => {
    setEmailState('waiting');
    startCooldown();
  });

  const { checkEmailVerified } = useCheckEmailVerifiedMutation(() => {
    setEmailState('verified');
  });

  const handleClick = () => {
    const email = getValues('email');

    if (emailState === 'idle') {
      setEmailState('editing');
    } else if (emailState === 'editing') {
      sendEmail({ email });
    } else if (emailState === 'waiting' && !isCooldown) {
      checkEmailVerified({ email });
    }
  };

  const getLabel = () => {
    if (emailState === 'editing') return '인증하기';
    if (emailState === 'waiting') return '인증 완료';
    return '변경하기';
  };

  return (
    <S.EmailForm>
      <Input
        inputSize='md'
        label='이메일'
        required
        disabled={emailState === 'idle'}
        {...register('email', {
          required: 'normal: 이메일은 필수입니다.',
          validate: validateEmail,
        })}
        error={errors.email?.message}
        width='34.5rem'
      />
      <OutlinedButton
        type='button'
        size='md'
        color='primary'
        label={getLabel()}
        onClick={handleClick}
        interactionVariant='normal'
        isDisabled={emailState === 'waiting' && isCooldown}
      />
    </S.EmailForm>
  );
}
