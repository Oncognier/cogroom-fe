import { Align, ColumnMode } from '@/components/organisms/Table/TableHeader/TableHeader.styled';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface TableHeaderItem {
  label: string;
  mode: ColumnMode;
  width?: string;
  align: Align;
}

export type DeployEnv = 'production' | 'staging' | 'development';
