'use client';

import { useFormContext } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Input from '@/components/molecules/Input/Input';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmail';
import { validateEmail } from '@/utils/validators/userValidators';

import * as S from './InputEmail.styled';
import { VALIDATION_MESSAGE } from '@/constants/validationMessages';

export interface InputEmailProps {
  email: string;
  onConfirm: () => void;
}

export default function InputEmail({ email, onConfirm }: InputEmailProps) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid },
  } = useFormContext<{ email: string }>();

  const { sendEmail } = useSendEmailMutation(onConfirm, setError);

  const onSubmit = ({ email }: { email: string }) => {
    sendEmail({ email });
  };

  return (
    <>
      <S.TitleWrapper>
        <S.SubTitle>변경할 이메일 주소를 입력해주세요</S.SubTitle>
        <S.Title>이메일을 입력해주세요</S.Title>
      </S.TitleWrapper>

      <S.EmailForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='이메일'
          inputSize='md'
          placeholder={email}
          {...register('email', {
            required: VALIDATION_MESSAGE.EMAIL_EMPTY_FILED_ERROR,
            validate: validateEmail,
          })}
          error={errors.email?.message}
          onClear={() => reset({ email: '' })}
        />
        <SolidButton
          label='이 이메일로 시작하기'
          size='fillContainer'
          color='primary'
          interactionVariant='normal'
          type='submit'
          isDisabled={!isValid}
        />
      </S.EmailForm>
    </>
  );
}
