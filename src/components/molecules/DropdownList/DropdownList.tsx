import { DropdownItem } from '@/components/atoms/DropdownItem/DropdownItem';
import { SelectOption } from '@/types/common';

import * as S from './DropdownList.styled';

interface DropdownListProps {
  options: SelectOption[];
  selectedValues: Array<string | number>;
  isMulti: boolean;
  groupName?: string;
  onSelect: (value: Array<string | number>) => void;
}

export function DropdownList({ options, selectedValues, isMulti, groupName, onSelect }: DropdownListProps) {
  const handleToggle = (value: string | number, checked: boolean) => {
    if (isMulti) {
      const next = checked ? [...selectedValues, value] : selectedValues.filter((v) => v !== value);
      onSelect(next);
    } else {
      onSelect([value]);
    }
  };

  return (
    <S.DropdownList>
      {options.map((option) => (
        <DropdownItem
          key={`${option.label}-${option.value}`}
          label={option.label}
          value={option.value}
          isChecked={selectedValues.includes(option.value)}
          isMulti={isMulti}
          onToggle={handleToggle}
          groupName={groupName}
        />
      ))}
    </S.DropdownList>
  );
}
