import { FilterDropdownItem } from '@/components/atoms/FilterDropdownItem/FilterDropdownItem';
import { SelectOption } from '@/types/common';

import * as S from './FilterDropdownList.styled';

interface FilterDropdownListProps {
  options: SelectOption[];
  selectedValues: Array<string | number>;
  isMulti: boolean;
  groupName?: string;
  onSelect: (value: Array<string | number>) => void;
}

export function FilterDropdownList({ options, selectedValues, isMulti, groupName, onSelect }: FilterDropdownListProps) {
  const handleToggle = (value: string | number, checked: boolean) => {
    if (isMulti) {
      const next = checked ? [...selectedValues, value] : selectedValues.filter((v) => v !== value);
      onSelect(next);
    } else {
      onSelect([value]);
    }
  };

  return (
    <S.FilterDropdownList>
      {options.map((option) => (
        <FilterDropdownItem
          key={`${option.label}-${option.value}`}
          label={option.label}
          value={option.value}
          isChecked={selectedValues.includes(option.value)}
          isMulti={isMulti}
          onToggle={handleToggle}
          groupName={groupName}
        />
      ))}
    </S.FilterDropdownList>
  );
}
