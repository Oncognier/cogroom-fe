'use client';

import React from 'react';

import { SelectOption } from '@/types/common';

import { SelectTag } from './SelectTag/SelectTag';
import * as S from './SelectTagList.styled';

interface SelectTagListProps {
  options: SelectOption[];
  value: Array<string | number>;
  onRemove: (val: string | number) => void;
}

export function SelectTagList({ options, value, onRemove }: SelectTagListProps) {
  return (
    <S.SelectTagList>
      {value.map((val) => {
        const item = options.find((opt) => opt.value === val);
        return (
          <SelectTag
            key={String(val)}
            label={item?.label || String(val)}
            onRemove={() => onRemove(val)}
          />
        );
      })}
    </S.SelectTagList>
  );
}
