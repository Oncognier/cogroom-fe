import { DropdownItemColor } from '@/components/atoms/DropdownItem/DropdownItem.styled';
import { Align, ColumnMode } from '@/components/organisms/Table/TableHeader/TableHeader.styled';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface DropdownOption {
  label: string;
  value: string | number;
  color: DropdownItemColor;
}

export interface TableHeaderItem {
  label: string;
  mode: ColumnMode;
  width?: string;
  align: Align;
}

export type DeployEnv = 'production' | 'staging' | 'development';
