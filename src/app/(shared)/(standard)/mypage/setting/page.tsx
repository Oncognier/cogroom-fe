'use client';

import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import SettingIcon from '@/assets/icons/setting.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import TextButton from '@/components/atoms/TextButton/TextButton';
import Input from '@/components/molecules/Input/Input';
import Textarea from '@/components/molecules/Textarea/Textarea';
import Loading from '@/components/organisms/Loading/Loading';
import { useEditUserInfoMutation } from '@/hooks/api/member/useEditUserInfo';
import useGetUserInfo from '@/hooks/api/member/useGetUserInfo';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';
import { SettingFormFields } from '@/types/form';
import { formatPhoneNumber } from '@/utils/formatAutoComplete';
import { validatePhoneNumber } from '@/utils/validators/userValidators';

import EmailForm from './_components/EmailForm/EmailForm';
import NicknameForm from './_components/NicknameForm/NicknameForm';
import SettingProfile from './_components/SettingProfile/SettingProfile';
import * as S from './page.styled';

export type EmailState = 'idle' | 'editing' | 'waiting';

const getDefaultValues = (data?: SettingFormFields): SettingFormFields => ({
  nickname: data?.nickname ?? '',
  email: data?.email ?? '',
  phoneNumber: data?.phoneNumber,
  description: data?.description,
  imageUrl: data?.imageUrl,
});

const isEmailStateValid = (emailState: EmailState) => emailState === 'idle';

export default function Setting() {
  const [emailState, setEmailState] = useState<EmailState>('idle');
  const [isNicknameChecked, setIsNicknameChecked] = useState(true);

  const { open: openApp } = useAppModalStore();
  const { open: openAlert } = useAlertModalStore();
  const { data, isLoading } = useGetUserInfo();

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
    setError,
    formState: { errors, isValid, dirtyFields },
  } = methods;

  const { editUserInfo } = useEditUserInfoMutation(setError);

  useEffect(() => {
    if (data && !isLoading) {
      reset(getDefaultValues(data));
    }
  }, [data, isLoading, reset]);

  const onSubmit = (formData: SettingFormFields) => {
    if (dirtyFields.nickname && !isNicknameChecked) {
      openAlert('alert', { message: '닉네임 중복 확인을 완료해주세요.' });
      return;
    }

    editUserInfo(formData);
  };

  if (isLoading) return <Loading />;

  return (
    <S.SettingContainer>
      <FormProvider {...methods}>
        <S.SettingForm onSubmit={handleSubmit(onSubmit)}>
          <SettingProfile initialImageUrl={data?.imageUrl} />

          <NicknameForm onCheck={setIsNicknameChecked} />

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

      <TextButton
        size='lg'
        label='상세 개인정보 설정'
        color='assistive'
        iconRight={<SettingIcon />}
        interactionVariant='normal'
        onClick={() => openApp('withdraw')}
      />
    </S.SettingContainer>
  );
}
