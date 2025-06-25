'use client';

import React from 'react';

import * as S from './SelectTag.styled';
import X from '@/assets/icons/x.svg';

interface SelectTagProps {
  label: string;
  onRemove: () => void;
}

export function SelectTag({ label, onRemove }: SelectTagProps) {
  return (
    <S.Tag>
      <S.TagLabel>{label}</S.TagLabel>
      <S.TagRemoveButton onClick={onRemove}>
        <X />
      </S.TagRemoveButton>
    </S.Tag>
  );
}
