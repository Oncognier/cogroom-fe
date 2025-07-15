'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Input from '@/components/molecules/Input/Input';
import { VALIDATION_MESSAGE } from '@/constants/validationMessages';
import { useCheckNicknameMutation } from '@/hooks/api/member/useCheckNickname';
import { useAlertModalStore } from '@/stores/useModalStore';
import { validateNickname } from '@/utils/validators/userValidators';

import * as S from './NicknameForm.styled';

interface NicknameFormProps {
  initialNickname?: string;
  onCheck: (isChecked: boolean) => void;
}

export default function NicknameForm({ initialNickname, onCheck }: NicknameFormProps) {
  const {
    register,
    watch,
    setError,
    formState: { errors },
  } = useFormContext<{ nickname: string }>();
  const { open } = useAlertModalStore();

  const [isChecked, setIsChecked] = useState(true);
  const nicknameValue = watch('nickname');
  const isChanged = nicknameValue !== initialNickname;

  const { checkNickname } = useCheckNicknameMutation(
    setError,
    () => {
      setIsChecked(true);
      onCheck(true);
      open('alert', { message: '사용 가능해요!' });
    },
    () => {
      setIsChecked(false);
      onCheck(false);
      open('alert', { message: VALIDATION_MESSAGE.NICKNAME_DUPLICATE_ERROR });
    },
  );

  useEffect(() => {
    if (isChanged) {
      setIsChecked(false);
      onCheck(false);
    }
  }, [nicknameValue]);

  return (
    <S.NicknameForm>
      <Input
        inputSize='md'
        label='닉네임'
        required
        {...register('nickname', {
          required: VALIDATION_MESSAGE.NICKNAME_EMPTY_FILED_ERROR,
          validate: validateNickname,
        })}
        error={errors.nickname?.message}
        width='34.5rem'
      />

      <S.ButtonWrapper isError={!!errors.nickname}>
        <OutlinedButton
          type='button'
          size='md'
          color='primary'
          label='중복확인'
          interactionVariant='normal'
          onClick={() => checkNickname({ nickname: nicknameValue })}
          isDisabled={!isChanged || isChecked}
        />
      </S.ButtonWrapper>
    </S.NicknameForm>
  );
}
