import React from 'react';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import Radio from '@/components/atoms/Radio/Radio';

import * as S from './FilterDropdownItem.styled';

interface FilterDropdownItemProps {
  label: string;
  value: string | number;
  isChecked: boolean;
  isPartial?: boolean;
  isMulti: boolean;
  isGroup?: boolean;
  isChild?: boolean;
  groupName?: string;
  onToggle: (value: string | number, checked: boolean) => void;
}

export function FilterDropdownItem({
  label,
  value,
  isChecked,
  isPartial = false,
  isMulti,
  isGroup = false,
  isChild = false,
  groupName,
  onToggle,
}: FilterDropdownItemProps) {
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
      style={{
        paddingLeft: isChild ? '24px' : '12px',
        fontWeight: isGroup ? '600' : '400',
        fontSize: isGroup ? '14px' : '13px',
      }}
    >
      {isMulti ? (
        <Checkbox
          size='sm'
          isDisabled={false}
          isChecked={isChecked}
          isIndeterminate={isPartial}
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
