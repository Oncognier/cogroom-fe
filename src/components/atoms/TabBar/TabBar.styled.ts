'use client';

import { Theme, css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

type TabBarSize = 'sm' | 'md';

export interface TabBarStyleProps {
  size: TabBarSize;
  state?: boolean;
  fillContainer?: boolean;
  interactionVariant: InteractionVariant;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.typography.body2.semibold};
`;

const sizeStyles: Record<TabBarSize, (theme: Theme) => SerializedStyles> = {
  sm: (theme) => css`
    padding: ${theme.spacing[8]} 2rem;
  `,
  md: (theme) => css`
    padding: ${theme.spacing[12]} ${theme.spacing[32]};
  `,
};

const getStateStyles = (theme: Theme, state?: boolean) => css`
  ${state
    ? css`
        color: ${theme.semantic.primary.normal};
        border-top-left-radius: 1.2rem;
        border-top-right-radius: 1.2rem;
        border-bottom: 3px solid ${theme.semantic.primary.normal};
      `
    : css`
        color: ${theme.semantic.interaction.inactive};
        border-radius: 1.2rem;
        border-bottom: 3px solid transparent;
      `}
`;

const getFillStyle = (fillContainer: boolean | undefined) =>
  fillContainer &&
  css`
    flex: 1;
  `;

const TabBar = styled.button<TabBarStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, size }) => sizeStyles[size](theme)};
  ${({ theme, state }) => getStateStyles(theme, state)};
  ${({ fillContainer }) => getFillStyle(fillContainer)};
  ${({ theme, interactionVariant }) => getInteraction(interactionVariant, theme.semantic.label.normal)(theme)};
`;

const S = {
  TabBar,
};

export default S;
