import React from 'react';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import Radio from '@/components/atoms/Radio/Radio';

import * as S from './FilterDropdownItem.styled';

interface FilterDropdownItemProps {
  label: string;
  value: string | number;
  isChecked: boolean;
  isMulti: boolean;
  groupName?: string;
  onToggle: (value: string | number, checked: boolean) => void;
}

export function FilterDropdownItem({ label, value, isChecked, isMulti, groupName, onToggle }: FilterDropdownItemProps) {
  const handleClick = () => {
    onToggle(value, !isChecked);
  };

  return (
    <S.FilterDropdownItem
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-pressed={isChecked}
      data-checked={isChecked}
    >
      {isMulti ? (
        <Checkbox
          size='sm'
          isDisabled={false}
          isChecked={isChecked}
          interactionVariant='strong'
          onToggle={() => {}}
          name={String(value)}
          tabIndex={-1}
        />
      ) : (
        <Radio
          size='sm'
          isDisabled={false}
          isChecked={isChecked}
          interactionVariant='strong'
          onToggle={() => {}}
          name={groupName}
          tabIndex={-1}
        />
      )}
      {label}
    </S.FilterDropdownItem>
  );
}
