'use client';

import { useFormContext } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Input from '@/components/molecules/Input/Input';
import { VALIDATION_MESSAGE } from '@/constants/validationMessages';
import { useGetEmailStatusQuery } from '@/hooks/api/auth/useGetEmailStatus';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmail';
import { useCooldown } from '@/hooks/useCooldown';
import { useAlertModalStore } from '@/stores/useModalStore';
import { validateEmail } from '@/utils/validators/userValidators';

import * as S from './EmailForm.styled';
import { EmailState } from '../../page';

interface EmailFormProps {
  emailState: EmailState;
  setEmailState: (state: EmailState) => void;
}

export default function EmailForm({ emailState, setEmailState }: EmailFormProps) {
  const {
    register,
    getValues,
    trigger,
    setError,
    formState: { errors },
  } = useFormContext<{ email: string }>();

  const { open } = useAlertModalStore();
  const { value: isCooldown, start: startCooldown } = useCooldown(3000);

  const { sendEmail } = useSendEmailMutation(() => {
    setEmailState('waiting');
    startCooldown();
  }, setError);

  const email = getValues('email');

  const { refetch: refetchEmailStatus, isFetching: isChecking } = useGetEmailStatusQuery(email, false);

  const handleClick = async () => {
    const currentEmail = getValues('email');

    if (emailState === 'idle') {
      setEmailState('editing');
      return;
    }

    const isValid = await trigger('email');
    if (!isValid) return;

    if (emailState === 'editing') {
      sendEmail({ email: currentEmail });
    } else if (emailState === 'waiting' && !isCooldown) {
      const { data } = await refetchEmailStatus();
      if (data) {
        setEmailState('idle');
        open('alert', { message: '변경되었습니다!' });
      } else {
        open('alert', { message: VALIDATION_MESSAGE.EMAIL_NOT_VERIFIED_ERROR });
      }
    }
  };

  const getLabel = () => {
    switch (emailState) {
      case 'editing':
        return '인증하기';
      case 'waiting':
        return '인증완료';
      default:
        return '변경하기';
    }
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
      />
      <S.ButtonWrapper isError={!!errors.email}>
        <OutlinedButton
          type='button'
          size='md'
          color='primary'
          label={getLabel()}
          onClick={handleClick}
          interactionVariant='normal'
          isDisabled={(emailState === 'waiting' && isCooldown) || isChecking}
        />
      </S.ButtonWrapper>
    </S.EmailForm>
  );
}
