import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type InteractionVariant = 'normal' | 'light' | 'strong';

export interface InteractionStyleProps {
  variant: InteractionVariant;
}

const commonStyles = (theme: Theme) => css`
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    ${theme.semantic.label.normal};
    opacity: ${theme.opacity[0]};
  }
`;

const variantStyles = {
  normal: (theme: Theme) => css`
    &:hover::after {
      opacity: ${theme.opacity[5]};
    }
    &:focus-within::after {
      opacity: ${theme.opacity[8]};
    }
    &:active::after {
      opacity: ${theme.opacity[12]};
    }
  `,

  light: (theme: Theme) => css`
    &:hover::after {
      opacity: 0.0375;
    }
    &:focus-within::after {
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
    &:focus-within::after {
      opacity: ${theme.opacity[12]};
    }
    &:active::after {
      opacity: 0.18;
    }
  `,
};

const Interaction = styled.div<InteractionStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ variant, theme }) => variantStyles[variant](theme)}
`;

const S = {
  Interaction,
};

export default S;
