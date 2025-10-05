'use client';

import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme } from '@/styles/theme';

export type DropdownItemColor = 'default' | 'red';

export interface DropdownItemStyleProps {
  color: DropdownItemColor;
}

const colorStyles: Record<DropdownItemColor, (theme: Theme) => SerializedStyles> = {
  default: (theme) => css`
    color: ${theme.semantic.label.normal};
  `,

  red: (theme) => css`
    color: ${theme.semantic.status.destructive};
  `,
};

export const DropdownItem = styled.div<DropdownItemStyleProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 1.2rem;

  ${({ theme }) => theme.typography.body1.regular};
  ${({ theme, color }) => colorStyles[color](theme)};
  background-color: ${({ theme }) => theme.semantic.static.white};
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.semantic.background.elevated.normal};
  }

  &:focus {
    outline: none;
  }
`;
