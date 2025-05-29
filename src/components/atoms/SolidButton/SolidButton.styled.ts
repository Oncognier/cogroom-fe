'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

type SolidButtonSize = 'sm' | 'md' | 'lg' | 'fillContainer';

export interface SolidButtonStyleProps {
  size: SolidButtonSize;
  interactionVariant: InteractionVariant;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: none;
  border-radius: ${theme.radius[4]};
  background-color: ${theme.semantic.primary.normal};
  color: ${theme.semantic.static.white};
  padding: 0.75rem 1.5rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${theme.semantic.interaction.disable};
    color: ${theme.semantic.label.assistive};
    cursor: default;
    pointer-events: none;
  }
`;

const sizeStyles: Record<SolidButtonSize, (theme: Theme) => SerializedStyles> = {
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

const SolidButton = styled.button<SolidButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, size }) => sizeStyles[size](theme)};
  ${({ theme, interactionVariant, disabled }) =>
    getInteraction(interactionVariant, theme.semantic.label.alternative, disabled)(theme)};
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
  SolidButton,
  Icon,
};

export default S;
