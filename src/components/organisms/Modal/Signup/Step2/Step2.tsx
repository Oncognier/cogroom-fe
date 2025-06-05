'use client';

import { useFormContext } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Input from '@/components/molecules/Input/Input';

import S from './Step2.styled';
import { validateEmail } from '@/utils/validators/emailValidators';
import { useSendEmailMutation } from '@/hooks/api/auth/useSendEmailMutation';

export interface Step2Props {
  email: string;
  onConfirm: () => void;
}

export default function Step2({ email, onConfirm }: Step2Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<{ email: string }>();
  const { mutateSendEmail } = useSendEmailMutation(onConfirm);

  const onSubmit = (data: { email: string }) => {
    mutateSendEmail({ email: data.email });
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
            required: '이메일은 필수입니다.',
            validate: validateEmail,
          })}
          error={errors.email?.message}
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
