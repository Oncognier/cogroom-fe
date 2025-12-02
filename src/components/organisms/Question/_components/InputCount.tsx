'use client';

import { useTextLimiter } from '@/hooks/useTextLimiter';

import * as S from './InputCount.styled';

interface InputCountProps {
  maxLength: number;
  value: string;
  onChange: (limitedValue: string) => void;
}

export default function InputCount({ maxLength, value, onChange }: InputCountProps) {
  const { isShaking, isOverLimit } = useTextLimiter(maxLength, value, onChange);

  return (
    <S.InputCount
      isOverLimit={isOverLimit}
      isShaking={isShaking}
    >
      {value.length}/{maxLength}
    </S.InputCount>
  );
}
