'use client';

import { useFormContext } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Input from '@/components/molecules/Input/Input';
import { VALIDATION_MESSAGE } from '@/constants/validationMessages';
import { useCheckEmailVerifiedMutation } from '@/hooks/api/auth/useCheckEmailVerified';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmail';
import { useCooldown } from '@/hooks/useCooldown';
import { validateEmail } from '@/utils/validators/userValidators';

import * as S from './EmailForm.styled';
import { EmailState } from '../../page';

interface EmailFormProps {
  email: string;
  emailState: EmailState;
  setEmailState: (state: EmailState) => void;
}

export default function EmailForm({ email, emailState, setEmailState }: EmailFormProps) {
  const { value: isCooldown, start: startCooldown } = useCooldown(3000);

  const {
    register,
    getValues,
    trigger,
    setError,
    formState: { errors },
  } = useFormContext<{ email: string }>();

  const { sendEmail } = useSendEmailMutation(() => {
    setEmailState('waiting');
    startCooldown();
  }, setError);

  const { checkEmailVerified } = useCheckEmailVerifiedMutation(
    () => setEmailState('idle'),
    () => setError('email', { message: VALIDATION_MESSAGE.EMAIL_NOT_VERIFIED_ERROR }),
  );

  const handleClick = async () => {
    const email = getValues('email');

    if (emailState === 'idle') return setEmailState('editing');

    if (!(await trigger('email'))) return;

    if (emailState === 'editing') {
      sendEmail({ email });
    } else if (emailState === 'waiting' && !isCooldown) {
      checkEmailVerified({ email });
    }
  };

  const getLabel = () => {
    if (emailState === 'editing') return '인증하기';
    if (emailState === 'waiting') return '인증완료';
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
          required: VALIDATION_MESSAGE.EMAIL_EMPTY_FILED_ERROR,
          validate: validateEmail,
        })}
        error={errors.email?.message}
        width='34.5rem'
      />
      <S.ButtonWrapper isError={!!errors.email}>
        <OutlinedButton
          type='button'
          size='md'
          color='primary'
          label={getLabel()}
          onClick={handleClick}
          interactionVariant='normal'
          isDisabled={emailState === 'waiting' && isCooldown}
        />
      </S.ButtonWrapper>
    </S.EmailForm>
  );
}
