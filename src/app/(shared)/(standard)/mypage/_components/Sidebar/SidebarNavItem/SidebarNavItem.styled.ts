'use client';

import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

export interface SidebarNavItemStyleProps {
  isActive: boolean;
  interactionVariant: InteractionVariant;
}

export const SidebarNavItem = styled.li<SidebarNavItemStyleProps>`
  a {
    ${({ theme }) => theme.typography.body2.semibold};
    color: ${({ theme, isActive }) => (isActive ? theme.semantic.label.normal : theme.semantic.label.alternative)};
    ${({ theme, interactionVariant }) =>
      getInteraction(interactionVariant, theme.semantic.label.alternative, false)(theme)};

    display: flex;
    align-items: center;

    height: 3rem;
    border-radius: 0.4rem;
  }
`;
