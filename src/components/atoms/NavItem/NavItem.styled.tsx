'use client';

import { Theme, css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

export interface NavItemStyleProps {
  isActive: boolean;
}
const activeTextStyle = {
  true: (theme: Theme): SerializedStyles => css`
    a {
      ${theme.typography.body2.semibold};
    }
  `,
  false: (theme: Theme): SerializedStyles => css`
    a {
      ${theme.typography.body2.regular};
    }
  `,
};

const NavItem = styled.li<NavItemStyleProps>`
  ${({ theme, isActive }) => activeTextStyle[isActive ? 'true' : 'false'](theme)}

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
