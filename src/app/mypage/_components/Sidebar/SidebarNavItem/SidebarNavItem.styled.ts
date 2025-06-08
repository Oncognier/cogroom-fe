'use client';

import styled from '@emotion/styled';

export interface SidebarNavItemStyleProps {
  isActive: boolean;
}

const SidebarNavItem = styled.li<SidebarNavItemStyleProps>`
  a {
    ${({ theme }) => theme.typography.body2.semibold};
    color: ${({ theme, isActive }) => (isActive ? theme.semantic.label.normal : theme.semantic.label.alternative)};
    outline: none;
    text-decoration: none;
  }
`;

const S = {
  SidebarNavItem,
};

export default S;
