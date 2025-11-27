'use client';

import styled from '@emotion/styled';

export type ColumnMode = 'fix' | 'expand';
export type Align = 'left' | 'center' | 'right';

export interface TableHeaderStyleProps {
  width?: string;
  mode: ColumnMode;
  align: Align;
}

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1.2rem 3rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.semantic.fill.normal};
`;

export const Label = styled.p<TableHeaderStyleProps>`
  ${({ theme }) => theme.typography.label1.medium};
  color: ${({ theme }) => theme.semantic.label.alternative};
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start')};
  ${({ mode, width }) => (mode === 'fix' ? `width: ${width ?? '12rem'};` : 'flex: 1;')}
`;
