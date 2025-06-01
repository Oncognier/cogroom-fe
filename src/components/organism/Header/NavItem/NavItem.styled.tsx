'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface NavItemStyleProps {
  isActive: boolean;
}

const NavItem = styled.li<NavItemStyleProps>`
  ${({ theme, isActive }) =>
    isActive
      ? css`
          a {
            ${theme.typography.body2.semibold};
          }
        `
      : css`
          a {
            ${theme.typography.body2.regular};
          }
        `}

  // Link
  a {
    color: ${({ theme }) => theme.semantic.label.normal};
    outline: none;
    text-decoration: none;
  }
`;

const S = {
  NavItem,
};

export default S;
