'use client';

import React from 'react';

import X from '@/assets/icons/x.svg';

import * as S from './SelectTag.styled';

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
