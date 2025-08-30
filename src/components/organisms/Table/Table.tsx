'use client';

import { ReactNode } from 'react';

import * as S from './Table.styled';
import TableHeader, { type TableHeaderProps } from './TableHeader/TableHeader';

interface TableProps extends TableHeaderProps {
  children?: ReactNode;
  isEmpty?: boolean;
  emptyState?: ReactNode;
}

export default function Table({ children, isEmpty = false, emptyState = null, ...headerProps }: TableProps) {
  return (
    <S.Table>
      <TableHeader {...headerProps} />
      {isEmpty ? emptyState : children}
    </S.Table>
  );
}
