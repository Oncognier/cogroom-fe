'use client';

import React from 'react';
import { SelectTag } from './SelectTag/SelectTag';
import * as S from './SelectTagList.styled';
import { SelectOption } from '@/types/common';

interface SelectTagListProps {
  options: SelectOption[];
  value: string[];
  onRemove: (val: string) => void;
}

export function SelectTagList({ options, value, onRemove }: SelectTagListProps) {
  return (
    <S.SelectTagList>
      {value.map((val) => {
        const item = options.find((opt) => opt.value === val);
        return (
          <SelectTag
            key={val}
            label={item?.label || val}
            onRemove={() => onRemove(val)}
          />
        );
      })}
    </S.SelectTagList>
  );
}
