'use client';

import { useFormContext } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Textarea from '@/components/molecules/Textarea/Textarea';

import * as S from './InputReason.styled';

export interface InputReasonProps {
  onConfirm: () => void;
}

export default function InputReason({ onConfirm }: InputReasonProps) {
  const { register } = useFormContext<{ reason: string }>();

  return (
    <S.InputReason>
      <S.Title>이유를 알려줄 수 있어요?</S.Title>

      <Textarea
        textareaSize='lg'
        minHeight='15.5rem'
        placeholder='답변을 입력해주세요'
        {...register('reason', { required: true })}
      />

      <OutlinedButton
        type='submit'
        size='md'
        color='primary'
        label='제출하기'
        fillContainer
        interactionVariant='normal'
        onClick={onConfirm}
      />
    </S.InputReason>
  );
}
