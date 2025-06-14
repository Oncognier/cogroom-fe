'use client';

import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Input from '@/components/molecules/Input/Input';
import Textarea from '@/components/molecules/Textarea/Textarea';
import { useEditUserInfoMutation } from '@/hooks/api/member/useEditUserInfo';
import useGetUserInfo from '@/hooks/api/member/useGetUserInfo';
import { formatPhoneNumber } from '@/utils/formatAutoComplete';
import { validateNickname, validatePhoneNumber } from '@/utils/validators/userValidators';

import EmailForm from './_components/EmailForm/EmailForm';
import SettingProfile from './_components/SettingProfile/SettingProfile';
import * as S from './page.styled';

export type EmailState = 'idle' | 'editing' | 'waiting' | 'verified';

interface SettingFormFields {
  nickname: string;
  email: string;
  phoneNumber?: string;
  description?: string;
  imageUrl?: string;
}

const getDefaultValues = (data?: SettingFormFields): SettingFormFields => ({
  nickname: data?.nickname ?? '',
  email: data?.email ?? '',
  phoneNumber: data?.phoneNumber ?? '',
  description: data?.description ?? '',
  imageUrl: data?.imageUrl,
});

const isEmailStateValid = (emailState: EmailState) => emailState === 'idle' || emailState === 'verified';

export default function Setting() {
  const [emailState, setEmailState] = useState<EmailState>('idle');
  const { data, isLoading } = useGetUserInfo();
  const { editUserInfo } = useEditUserInfoMutation();

  const methods = useForm<SettingFormFields>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: getDefaultValues(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = methods;

  useEffect(() => {
    if (data && !isLoading) {
      reset(getDefaultValues(data));
    }
  }, [data, isLoading, reset]);

  const onSubmit = (formData: SettingFormFields) => {
    editUserInfo(formData);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <FormProvider {...methods}>
      <S.SettingForm onSubmit={handleSubmit(onSubmit)}>
        <SettingProfile
          imageUrl={data?.imageUrl}
          onUploadComplete={(url) => setValue('imageUrl', url, { shouldValidate: true })}
        />

        <Input
          inputSize='md'
          label='닉네임'
          required
          {...register('nickname', {
            required: 'normal: 닉네임은 필수입니다.',
            validate: validateNickname,
          })}
          error={errors.nickname?.message}
          width='34.5rem'
        />

        <EmailForm
          emailState={emailState}
          setEmailState={setEmailState}
        />

        <Input
          inputSize='md'
          label='전화번호'
          {...register('phoneNumber', {
            validate: validatePhoneNumber,
          })}
          onBlur={(e) => {
            const formatted = formatPhoneNumber(e.target.value);
            setValue('phoneNumber', formatted, { shouldValidate: true });
          }}
          error={errors.phoneNumber?.message}
          width='34.5rem'
        />

        <Textarea
          textareaSize='md'
          label='자기소개'
          {...register('description')}
          error={errors.description?.message}
          width='34.5rem'
          minHeight='12.8rem'
        />

        <S.ButtonWrapper>
          <OutlinedButton
            size='md'
            color='primary'
            label='저장하기'
            interactionVariant='normal'
            type='submit'
            isDisabled={!isValid || !isEmailStateValid(emailState)}
          />
        </S.ButtonWrapper>
      </S.SettingForm>
    </FormProvider>
  );
}
