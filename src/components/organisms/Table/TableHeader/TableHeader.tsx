'use client';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import { CheckboxSize } from '@/components/atoms/Checkbox/Checkbox.styled';
import { TableHeaderItem } from '@/types/common';

import * as S from './TableHeader.styled';

export interface TableHeaderProps {
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
  headerItems: TableHeaderItem[];
  checkboxSize?: CheckboxSize;
}

export default function TableHeader({ checked, onCheckToggle, headerItems, checkboxSize = 'nm' }: TableHeaderProps) {
  return (
    <S.TableHeader>
      <Checkbox
        size={checkboxSize}
        isChecked={checked}
        onToggle={onCheckToggle}
        interactionVariant='normal'
      />
      {headerItems.map((item, idx) => (
        <S.Label
          key={idx}
          mode={item.mode}
          width={item.width}
          align={item.align}
        >
          {item.label}
        </S.Label>
      ))}
    </S.TableHeader>
  );
}
