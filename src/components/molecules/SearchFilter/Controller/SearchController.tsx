'use client';

import { Controller, type Control } from 'react-hook-form';

import Search from '@/components/atoms/Search/Search';

import * as S from '../SearchFilter.styled';
import type { FilterValues } from '../SearchFilter.types';

interface SearchControllerProps {
  control: Control<FilterValues>;
  name: string;
  placeholder: string;
  showMobileLabel?: boolean;
}

export default function SearchController({ control, name, placeholder, showMobileLabel }: SearchControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <S.FieldWrapper>
          {showMobileLabel && <S.MobileGroupLabel>{placeholder}</S.MobileGroupLabel>}
          <Search
            inputSize='sm'
            placeholder={placeholder}
            interactionVariant='normal'
            value={String(field.value ?? '')}
            onChange={(e) => field.onChange(e.target.value)}
          />
        </S.FieldWrapper>
      )}
    />
  );
}
