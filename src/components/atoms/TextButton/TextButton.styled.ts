'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/helpers/interaction';

type TextButtonColor = 'primary' | 'assistive';
type TextButtonSize = 'sm' | 'md' | 'lg';
type TextButtonAlign = 'center' | 'space-between';

export interface TextButtonStyleProps {
  color: TextButtonColor;
  size: TextButtonSize;
  interactionVariant: InteractionVariant;
  fillContainer?: boolean;
  align?: TextButtonAlign;
}

const commonStyles = (theme: Theme, fillContainer?: boolean, align?: TextButtonAlign) => css`
  display: flex;
  align-items: center;
  justify-content: ${align};
  gap: 4px;

  width: ${fillContainer ? '100%' : 'auto'};
  border: none;
  border-radius: 0.4rem;
  background-color: transparent;
  padding: 0.3rem 0.4rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;

const colorStyles: Record<TextButtonColor, (theme: Theme) => SerializedStyles> = {
  primary: (theme) => css`
    color: ${theme.semantic.primary.normal};
    &:disabled {
      color: ${theme.semantic.label.assistive};
    }
  `,
  assistive: (theme) => css`
    color: ${theme.semantic.label.alternative};
    &:disabled {
      color: ${theme.semantic.label.assistive};
    }
  `,
};

const sizeStyles: Record<TextButtonSize, (theme: Theme) => SerializedStyles> = {
  sm: (theme) => css`
    ${theme.typography.label2.semibold};
  `,
  md: (theme) => css`
    ${theme.typography.body2.semibold};
  `,
  lg: (theme) => css`
    ${theme.typography.body1.semibold};
  `,
};

const getInteractionColor = (theme: Theme, color: TextButtonColor) => {
  if (color === 'primary') return theme.semantic.primary.normal;
  if (color === 'assistive') return theme.semantic.label.alternative;
  return theme.semantic.interaction.inactive;
};

export const TextButton = styled.button<TextButtonStyleProps>`
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
