'use client';

import { Controller, type Control } from 'react-hook-form';

import { Select } from '@/components/molecules/Select/Select';

import * as S from '../SearchFilter.styled';
import type { FilterValues } from '../SearchFilter.types';

interface SelectControllerProps {
  control: Control<FilterValues>;
  name: string;
  placeholder: string;
  options: Array<{ label: string; value: string | number }>;
  isMulti?: boolean;
}

export default function SelectController({ control, name, placeholder, options, isMulti }: SelectControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const selectValue = Array.isArray(field.value) ? field.value : field.value ? [field.value] : [];

        return (
          <S.FieldWrapper>
            <Select
              inputSize='sm'
              placeholder={placeholder}
              isMulti={isMulti}
              options={options}
              value={selectValue}
              onChange={field.onChange}
            />
          </S.FieldWrapper>
        );
      }}
    />
  );
}
