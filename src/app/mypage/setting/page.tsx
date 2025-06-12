'use client';

import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Input from '@/components/molecules/Input/Input';
import Textarea from '@/components/molecules/Textarea/Textarea';
import { useEditUserInfoMutation } from '@/hooks/api/member/useEditUserInfo';
import useGetUserInfo from '@/hooks/api/member/useGetUserInfo';

import EmailForm from './_components/EmailForm/EmailForm';
import SettingProfile from './_components/SettingProfile/SettingProfile';
import S from './page.styled';

interface SettingFormFields {
  nickname: string;
  email: string;
  phoneNumber?: string;
  description?: string;
  imageUrl?: string;
}

export default function Setting() {
  const { data, isLoading } = useGetUserInfo();
  const { editUserInfo } = useEditUserInfoMutation();

  const getDefaultValues = (data?: SettingFormFields): SettingFormFields => ({
    nickname: data?.nickname ?? '',
    email: data?.email ?? '',
    phoneNumber: data?.phoneNumber ?? '',
    description: data?.description ?? '',
    imageUrl: data?.imageUrl,
  });

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
          onUploadComplete={(url) => {
            setValue('imageUrl', url, { shouldValidate: true });
          }}
        />

        <Input
          inputSize='md'
          label='닉네임'
          required
          {...register('nickname', { required: '닉네임은 필수입니다.' })}
          error={errors.nickname?.message}
          width='34.5rem'
        />

        <EmailForm />

        <Input
          inputSize='md'
          label='전화번호'
          {...register('phoneNumber')}
          error={errors.phoneNumber?.message}
          width='34.5rem'
        />

        <Textarea
          label='자기소개'
          {...register('description')}
          error={errors.description?.message}
          width='34.5rem'
        />

        <S.ButtonWrapper>
          <OutlinedButton
            size='md'
            color='primary'
            label='저장하기'
            interactionVariant='normal'
            type='submit'
            isDisabled={!isValid}
          />
        </S.ButtonWrapper>
      </S.SettingForm>
    </FormProvider>
  );
}
