import React from 'react';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import Radio from '@/components/atoms/Radio/Radio';

import * as S from './DropdownItem.styled';

interface DropdownItemProps {
  label: string;
  value: string;
  isChecked: boolean;
  isMulti: boolean;
  groupName?: string;
  onToggle: (value: string, checked: boolean) => void;
}

export function DropdownItem({ label, value, isChecked, isMulti, groupName, onToggle }: DropdownItemProps) {
  const handleClick = () => {
    onToggle(value, !isChecked);
  };

  return (
    <S.DropdownItem
      type='button'
      onClick={handleClick}
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
          name={value}
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
    </S.DropdownItem>
  );
}
