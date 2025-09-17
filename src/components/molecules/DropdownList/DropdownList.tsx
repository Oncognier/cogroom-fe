import { DropdownItem } from '@/components/atoms/DropdownItem/DropdownItem';
import { DropdownOption } from '@/types/common';

import * as S from './DropdownList.styled';

interface DropdownListProps {
  options: DropdownOption[];
  selectedValues: Array<string | number>;
  onSelect: (value: Array<string | number>) => void;
}

export function DropdownList({ options, selectedValues, onSelect }: DropdownListProps) {
  const handleToggle = (value: string | number) => {
    onSelect([value]);
  };

  return (
    <S.DropdownList>
      {options.map((option) => (
        <DropdownItem
          key={`${option.label}-${option.value}`}
          color={option.color}
          label={option.label}
          value={option.value}
          isChecked={selectedValues.includes(option.value)}
          onToggle={handleToggle}
        />
      ))}
    </S.DropdownList>
  );
}
