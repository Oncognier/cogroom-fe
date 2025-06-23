'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction } from '@/styles/interaction';

export type NumberPaginationSize = 'sm' | 'md';

export interface NumberPaginationStyleProps {
  size: NumberPaginationSize;
  isActive?: boolean;
}

const pageButtonSizeStyles: Record<NumberPaginationSize, (theme: Theme) => SerializedStyles> = {
  sm: (theme) => css`
    ${theme.typography.label2.medium};
    padding: 0 0.6rem;
  `,
  md: (theme) => css`
    ${theme.typography.body2.medium};
    padding: 0 0.8rem;
  `,
};

const iconButtonSizeStyles: Record<NumberPaginationSize, SerializedStyles> = {
  sm: css`
    width: 2rem;
    height: 2rem;
    padding: 0.4rem;
  `,
  md: css`
    width: 2.67rem;
    height: 2.67rem;
    padding: 0.5rem;
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const IconButton = styled.button<NumberPaginationStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  ${({ size }) => iconButtonSizeStyles[size]};
  color: ${({ theme }) => theme.semantic.label.assistive};
  ${({ theme, disabled }) => getInteraction('normal', theme.semantic.label.alternative, disabled)(theme)};

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.semantic.label.disable};
    cursor: default;
  }
`;

export const PageButton = styled.button<NumberPaginationStyleProps>`
  ${({ theme, size }) => pageButtonSizeStyles[size](theme)};
  color: ${({ theme, isActive }) => (isActive ? theme.semantic.primary.normal : theme.semantic.label.normal)};
`;
