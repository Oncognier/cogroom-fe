import { DropdownItem } from '@/components/atoms/DropdownItem/DropdownItem';

import * as S from './DropdownList.styled';

interface DropdownListProps {
  options: { label: string; value: string }[];
  selectedValues: string[];
  isMulti: boolean;
  groupName?: string;
  onSelect: (value: string[]) => void;
}

export function DropdownList({ options, selectedValues, isMulti, groupName, onSelect }: DropdownListProps) {
  const handleToggle = (value: string, checked: boolean) => {
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
          key={option.value}
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
