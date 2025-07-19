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

type NicknameCheckState = 'idle' | 'checking' | 'valid' | 'invalid';

export default function NicknameForm({ initialNickname, onCheck }: NicknameFormProps) {
  const {
    register,
    watch,
    setError,
    formState: { errors },
  } = useFormContext<{ nickname: string }>();

  const nickname = watch('nickname');
  const [checkState, setCheckState] = useState<NicknameCheckState>('idle');
  const { open } = useAlertModalStore();

  const { checkNickname } = useCheckNicknameMutation(
    setError,
    () => {
      setCheckState('valid');
      onCheck(true);
      open('alert', { message: '사용 가능해요!' });
    },
    () => {
      setCheckState('invalid');
      onCheck(false);
      open('alert', { message: VALIDATION_MESSAGE.NICKNAME_DUPLICATE_ERROR });
    },
  );

  useEffect(() => {
    if (nickname && nickname !== initialNickname) {
      setCheckState('idle');
      onCheck(false);
    }
  }, [nickname, initialNickname]);

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
          onClick={() => {
            setCheckState('checking');
            checkNickname({ nickname });
          }}
          isDisabled={checkState === 'valid' || nickname === initialNickname}
        />
      </S.ButtonWrapper>
    </S.NicknameForm>
  );
}
