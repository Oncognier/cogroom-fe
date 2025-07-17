'use client';

import React from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';
import { useDropdown } from '@/hooks/useDropdown';
import { SelectOption } from '@/types/common';

import * as S from './Select.styled';
import type { SelectStyleProps } from './Select.styled';
import { FilterDropdownList } from '../FilterDropdownList/FilterDropdownList';
import { SelectTagList } from './SelectTagList/SelectTagList';

interface SelectProps extends SelectStyleProps {
  options: SelectOption[];
  value: Array<string | number>;
  onChange: (value: Array<string | number>) => void;
  isMulti?: boolean;
  placeholder?: string;
  groupName?: string;
  error?: string;
  label?: string;
  required?: boolean;
}

export function Select({
  inputSize,
  options,
  value,
  onChange,
  isMulti = false,
  placeholder,
  groupName,
  error,
  label,
  required = false,
}: SelectProps) {
  const { isOpen, toggle, handleBlur, dropdownRef } = useDropdown();

  const selectedLabels = options.filter((opt) => value.includes(opt.value)).map((opt) => opt.label);

  const handleSelect = (next: Array<string | number>) => {
    onChange(next);
    if (!isMulti) toggle();
  };

  const handleRemove = (val: string | number) => {
    onChange(value.filter((v) => v !== val));
  };

  return (
    <S.Wrapper>
      {label && (
        <InputLabel
          label={label}
          required={required}
        />
      )}

      <S.DropdownContainer
        ref={dropdownRef}
        onBlur={handleBlur}
        tabIndex={-1}
      >
        <S.InputContainer
          isOpen={isOpen}
          isError={!!error}
          onClick={toggle}
        >
          {isMulti && (
            <SelectTagList
              options={options}
              value={value}
              onRemove={handleRemove}
            />
          )}

          {isMulti && value.length > 0 ? null : (
            <S.TriggerInput
              type='text'
              inputSize={inputSize}
              value={isMulti ? '' : selectedLabels[0]?.toString() || ''}
              placeholder={value.length === 0 ? placeholder : ''}
              readOnly
            />
          )}

          <S.IconWrapper
            isOpen={isOpen}
            isError={!!error}
          >
            <ChevronDown />
          </S.IconWrapper>
        </S.InputContainer>

        {isOpen && (
          <S.DropdownPanel role='listbox'>
            <FilterDropdownList
              options={options}
              selectedValues={value}
              isMulti={isMulti}
              onSelect={handleSelect}
              groupName={groupName}
            />
          </S.DropdownPanel>
        )}
      </S.DropdownContainer>

      {error && <S.ErrorText role='alert'>{error}</S.ErrorText>}
    </S.Wrapper>
  );
}
