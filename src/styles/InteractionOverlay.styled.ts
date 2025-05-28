'use client';

import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type InteractionVariant = 'normal' | 'light' | 'strong';

export interface InteractionStyleProps {
  interactionVariant: InteractionVariant;
  interactionColor?: string;
  interactionDisabled?: boolean;
}

const commonStyles = (theme: Theme, interactionColor?: string) => css`
  display: inline-flex;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background-color: ${interactionColor ?? theme.semantic.label.normal};
    opacity: ${theme.opacity[0]};
    z-index: 2;
  }

  &:focus {
    outline: none;
  }
`;

const variantStyles = {
  normal: (theme: Theme) => css`
    &:hover::after {
      opacity: ${theme.opacity[5]};
    }
    &:focus-visible::after {
      outline: none;
      opacity: ${theme.opacity[8]};
    }
    &:active::after {
      opacity: ${theme.opacity[12]};
    }
  `,

  light: () => css`
    &:hover::after {
      opacity: 0.0375;
    }
    &:focus-visible::after {
      opacity: 0.06;
    }
    &:active::after {
      opacity: 0.09;
    }
  `,

  strong: (theme: Theme) => css`
    &:hover::after {
      opacity: 0.075;
    }
    &:focus-visible::after {
      opacity: ${theme.opacity[12]};
    }
    &:active::after {
      opacity: 0.18;
    }
  `,
};

const InteractionOverlay = styled.div<InteractionStyleProps>`
  ${({ theme, interactionColor }) => commonStyles(theme, interactionColor)}
  ${({ interactionVariant, theme, interactionDisabled }) =>
    !interactionDisabled && variantStyles[interactionVariant](theme)}
`;

export default InteractionOverlay;
