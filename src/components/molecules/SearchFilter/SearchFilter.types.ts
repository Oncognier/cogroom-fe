import { SelectOptionOrGroup } from '@/types/common';

export interface FilterFieldConfig {
  search?: { name: string; placeholder: string }[];
  select?: {
    name: string;
    placeholder: string;
    options: SelectOptionOrGroup[];
    isMulti?: boolean;
  }[];
  dateRange?: {
    startDateName?: string;
    endDateName?: string;
  };
}

export interface FilterAction {
  label: string;
  variant?: 'outlined' | 'solid';
  onClick?: () => void;
}

export interface FilterValues {
  [key: string]: unknown;
}

export interface FilterProps {
  totalTitle?: string;
  total?: number;
  fields: FilterFieldConfig;
  action: FilterAction;
  className?: string;
}
