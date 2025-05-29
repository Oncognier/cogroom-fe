'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

type OutlinedButtonColor = 'primary' | 'secondary' | 'assistive';
type OutlinedButtonSize = 'sm' | 'md' | 'lg' | 'fillContainer';

export interface OutlinedButtonStyleProps {
  color: OutlinedButtonColor;
  size: OutlinedButtonSize;
  interactionVariant: InteractionVariant;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border-radius: ${theme.radius[4]};
  border: 1px solid ${theme.semantic.primary.normal};
  color: ${theme.semantic.primary.normal};
  padding: 0.75rem 1.5rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
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
  fillContainer: (theme) => css`
    ${theme.typography.body1.semibold};
    width: 100%;
  `,
};

const colorStyles: Record<OutlinedButtonColor, (theme: Theme, disable?: boolean) => SerializedStyles> = {
  primary: (theme) => css`
    border-color: ${theme.semantic.primary.normal};
    color: ${theme.semantic.primary.normal};

    &:disabled {
      border-color: ${theme.semantic.label.assistive};
      color: ${theme.semantic.label.assistive};
    }
  `,

  secondary: (theme) => css`
    border-color: ${theme.semantic.interaction.inactive};
    color: ${theme.semantic.primary.normal};

    &:disabled {
      border-color: ${theme.semantic.label.assistive};
      color: ${theme.semantic.label.assistive};
    }
  `,

  assistive: (theme) => css`
    border-color: ${theme.semantic.interaction.inactive};
    color: ${theme.semantic.label.normal};

    &:disabled {
      border-color: ${theme.semantic.label.assistive};
      color: ${theme.semantic.label.assistive};
    }
  `,
};

const getInteractionColor = (theme: Theme, color: OutlinedButtonColor) => {
  if (color === 'primary') {
    return theme.semantic.primary.normal;
  }
  if (color === 'secondary') {
    return theme.semantic.label.alternative;
  }
  if (color === 'assistive') {
    return theme.semantic.label.alternative;
  }
};

const OutlinedButton = styled.button<OutlinedButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, size }) => sizeStyles[size](theme)};
  ${({ theme, color }) => colorStyles[color](theme)};
  ${({ theme, interactionVariant, disabled, color }) =>
    getInteraction(interactionVariant, getInteractionColor(theme, color), disabled)(theme)};
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

const S = {
  OutlinedButton,
  Icon,
};

export default S;
