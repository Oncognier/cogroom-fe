import { FilterDropdownItem } from '@/components/atoms/FilterDropdownItem/FilterDropdownItem';
import { SelectOption, GroupOption, SelectOptionOrGroup } from '@/types/common';

import * as S from './FilterDropdownList.styled';

interface FilterDropdownListProps {
  options: SelectOptionOrGroup[];
  selectedValues: Array<string | number>;
  isMulti: boolean;
  groupName?: string;
  onSelect: (value: Array<string | number>) => void;
}

export function FilterDropdownList({ options, selectedValues, isMulti, groupName, onSelect }: FilterDropdownListProps) {
  const isGroupOption = (option: SelectOptionOrGroup): option is GroupOption => {
    return 'children' in option;
  };

  const handleToggle = (value: string | number, checked: boolean) => {
    if (isMulti) {
      const next = checked ? [...selectedValues, value] : selectedValues.filter((v) => v !== value);
      onSelect(next);
    } else {
      onSelect([value]);
    }
  };

  const handleGroupToggle = (group: GroupOption, checked: boolean) => {
    if (!isMulti) return;

    const groupValues = group.children.map((child) => child.value);
    const next = checked
      ? [...new Set([...selectedValues, ...groupValues])]
      : selectedValues.filter((v) => !groupValues.includes(v));

    onSelect(next);
  };

  const isGroupSelected = (group: GroupOption) => {
    return group.children.every((child) => selectedValues.includes(child.value));
  };

  const isGroupPartiallySelected = (group: GroupOption) => {
    return group.children.some((child) => selectedValues.includes(child.value)) && !isGroupSelected(group);
  };

  return (
    <S.FilterDropdownList>
      {options.map((option) => {
        if (isGroupOption(option)) {
          const isSelected = isGroupSelected(option);
          const isPartial = isGroupPartiallySelected(option);

          return (
            <div key={option.label}>
              <FilterDropdownItem
                label={option.label}
                value={option.label}
                isChecked={isSelected}
                isPartial={isPartial}
                isMulti={isMulti}
                onToggle={(_, checked) => handleGroupToggle(option, checked)}
                groupName={groupName}
                isGroup={true}
              />
              {option.children.map((child) => (
                <FilterDropdownItem
                  key={`${child.label}-${child.value}`}
                  label={child.label}
                  value={child.value}
                  isChecked={selectedValues.includes(child.value)}
                  isMulti={isMulti}
                  onToggle={handleToggle}
                  groupName={groupName}
                  isChild={true}
                />
              ))}
            </div>
          );
        }

        return (
          <FilterDropdownItem
            key={`${option.label}-${option.value}`}
            label={option.label}
            value={option.value}
            isChecked={selectedValues.includes(option.value)}
            isMulti={isMulti}
            onToggle={handleToggle}
            groupName={groupName}
          />
        );
      })}
    </S.FilterDropdownList>
  );
}
