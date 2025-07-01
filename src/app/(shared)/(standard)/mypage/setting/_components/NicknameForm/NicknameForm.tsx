'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Input from '@/components/molecules/Input/Input';
import { VALIDATION_MESSAGE } from '@/constants/validationMessages';
import { useCheckNicknameMutation } from '@/hooks/api/member/useCheckNickname';
import { validateNickname } from '@/utils/validators/userValidators';

import * as S from './NicknameForm.styled';

interface NicknameFormProps {
  onCheck: (isChecked: boolean) => void;
}

export default function NicknameForm({ onCheck }: NicknameFormProps) {
  const {
    register,
    watch,
    getValues,
    setError,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useFormContext<{ nickname: string }>();

  const isChanged = !!dirtyFields.nickname;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChanged) {
      setIsChecked(false);
      onCheck(false);
    }
  }, [isChanged, onCheck]);

  const { checkNickname } = useCheckNicknameMutation(
    setError,
    () => {
      setError('nickname', {
        type: 'manual',
        message: VALIDATION_MESSAGE.NICKNAME_DUPLICATE_ERROR,
      });
    },
    () => {
      setIsChecked(true);
      clearErrors('nickname');
      onCheck(true);
    },
  );

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
          onClick={() => checkNickname({ nickname: getValues('nickname') })}
          isDisabled={!isChanged || isChecked}
        />
      </S.ButtonWrapper>
    </S.NicknameForm>
  );
}
