import React from 'react';

import * as S from './DropdownItem.styled';
import type { DropdownItemStyleProps } from './DropdownItem.styled';

interface DropdownItemProps extends DropdownItemStyleProps {
  label: string;
  value: string | number;
  isChecked: boolean;
  onToggle: (value: string | number, checked: boolean) => void;
}

export function DropdownItem({ label, value, isChecked, onToggle, color = 'default' }: DropdownItemProps) {
  const handleClick = () => {
    onToggle(value, !isChecked);
  };

  return (
    <S.DropdownItem
      tabIndex={0}
      color={color}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {label}
    </S.DropdownItem>
  );
}
