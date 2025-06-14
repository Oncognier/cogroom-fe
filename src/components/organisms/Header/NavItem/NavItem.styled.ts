'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface NavItemStyleProps {
  isActive: boolean;
}

export const NavItem = styled.li<NavItemStyleProps>`
  a {
    ${({ theme }) => theme.typography.body2.regular};
    color: ${({ theme }) => theme.semantic.label.normal};
    outline: none;
    text-decoration: none;

    ${({ theme, isActive }) =>
      isActive &&
      css`
        ${theme.typography.body2.semibold};
      `}
  }
`;
