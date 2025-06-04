'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

type TextButtonColor = 'primary' | 'assistive';
type TextButtonSize = 'sm' | 'md' | 'lg' | 'fillContainer';

export interface TextButtonStyleProps {
  color: TextButtonColor;
  size: TextButtonSize;
  interactionVariant: InteractionVariant;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: none;
  border-radius: ${theme.radius[4]};
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
  fillContainer: (theme) => css`
    ${theme.typography.body1.semibold};
    width: 100%;
  `,
};

const getInteractionColor = (theme: Theme, color: TextButtonColor) => {
  if (color === 'primary') {
    return theme.semantic.primary.normal;
  }
  if (color === 'assistive') {
    return theme.semantic.label.alternative;
  }
};

const TextButton = styled.button<TextButtonStyleProps>`
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
    width: 1.13em;
    height: 1.13em;
  }
`;

const S = {
  TextButton,
  Icon,
};

export default S;
