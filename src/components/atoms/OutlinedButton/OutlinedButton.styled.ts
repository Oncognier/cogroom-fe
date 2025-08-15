'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

type OutlinedButtonColor = 'primary' | 'secondary' | 'assistive';
type OutlinedButtonSize = 'sm' | 'md' | 'lg';
type OutlinedButtonAlign = 'center' | 'space-between';

export interface OutlinedButtonStyleProps {
  color: OutlinedButtonColor;
  size: OutlinedButtonSize;
  fillContainer?: boolean;
  interactionVariant: InteractionVariant;
  align?: OutlinedButtonAlign;
}

const commonStyles = (theme: Theme, fillContainer?: boolean, align?: OutlinedButtonAlign) => css`
  display: flex;
  align-items: center;
  justify-content: ${align};
  gap: 4px;

  width: ${fillContainer ? '100%' : 'auto'};
  border-radius: 1.2rem;
  border: 1px solid ${theme.semantic.primary.normal};
  color: ${theme.semantic.primary.normal};
  padding: 1.1rem 2.3rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: ${theme.semantic.label.assistive};
    color: ${theme.semantic.label.assistive};
    cursor: default;
    pointer-events: none;
  }
`;

const sizeStyles: Record<OutlinedButtonSize, (theme: Theme) => SerializedStyles> = {
  sm: (theme) => css`
    ${theme.typography.label2.semibold}
  `,
  md: (theme) => css`
    ${theme.typography.body2.semibold}
  `,
  lg: (theme) => css`
    ${theme.typography.body1.semibold}
  `,
};

const colorStyles: Record<OutlinedButtonColor, (theme: Theme) => SerializedStyles> = {
  primary: (theme) => css`
    border-color: ${theme.semantic.primary.normal};
    color: ${theme.semantic.primary.normal};
  `,

  secondary: (theme) => css`
    border-color: ${theme.semantic.label.assistive};
    color: ${theme.semantic.primary.normal};
  `,

  assistive: (theme) => css`
    border-color: ${theme.semantic.label.assistive};
    color: ${theme.semantic.label.normal};
  `,
};

const getInteractionColor = (theme: Theme, color: OutlinedButtonColor) => {
  if (color === 'primary') {
    return theme.semantic.primary.normal;
  }
  return theme.semantic.interaction.inactive;
};

export const OutlinedButton = styled.button<OutlinedButtonStyleProps>`
  ${({ theme, fillContainer, align }) => commonStyles(theme, fillContainer, align)};
  ${({ theme, size }) => sizeStyles[size](theme)};
  ${({ theme, color }) => colorStyles[color](theme)};
  ${({ theme, interactionVariant, disabled, color }) =>
    getInteraction(interactionVariant, getInteractionColor(theme, color), disabled)(theme)};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 1.13em;
    height: 1.13em;
  }
`;
