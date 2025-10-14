'use client';

import { Controller, type Control } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';

import * as S from '../SearchFilter.styled';
import type { FilterValues } from '../SearchFilter.types';

interface MobileSelectControllerProps {
  control: Control<FilterValues>;
  name: string;
  placeholder: string;
  options: Array<{ label: string; value: string | number }>;
  isMulti?: boolean;
}

export default function MobileSelectController({
  control,
  name,
  placeholder,
  options,
  isMulti,
}: MobileSelectControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        const current = Array.isArray(value) ? value : value != null ? [value] : [];

        const toggle = (v: string | number) => {
          if (isMulti) {
            const next = current.includes(v) ? current.filter((x) => x !== v) : [...current, v];
            onChange(next);
          } else {
            onChange(v);
          }
        };

        return (
          <S.FieldWrapper>
            <S.MobileGroupLabel>{placeholder}</S.MobileGroupLabel>
            <S.OptionButtonGroup>
              {options.map(({ label, value: v }) => {
                const active = current.includes(v);
                return (
                  <SolidButton
                    key={`${name}-${String(v)}`}
                    size='sm'
                    type='button'
                    label={label}
                    color={active ? 'primary' : 'assistive'}
                    interactionVariant='normal'
                    onClick={() => toggle(v)}
                  />
                );
              })}
            </S.OptionButtonGroup>
          </S.FieldWrapper>
        );
      }}
    />
  );
}
