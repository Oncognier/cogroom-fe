import { css, Theme } from '@emotion/react';

export type InteractionVariant = 'normal' | 'light' | 'strong';

const interactionOpacity = {
  normal: (theme: Theme) => ({
    hover: theme.opacity[5],
    focus: theme.opacity[8],
    active: theme.opacity[12],
  }),
  light: () => ({
    hover: 0.0375,
    focus: 0.06,
    active: 0.09,
  }),
  strong: (theme: Theme) => ({
    hover: 0.075,
    focus: theme.opacity[12],
    active: 0.18,
  }),
};

export const getInteraction =
  (variant: InteractionVariant, interactionColor?: string, disabled?: boolean) => (theme: Theme) => {
    if (disabled) return css``;

    const baseColor = interactionColor ?? theme.semantic.label.normal;
    const opacities = interactionOpacity[variant](theme);

    return css`
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        border-radius: inherit;
        background-color: ${baseColor};
        opacity: ${theme.opacity[0]};
        z-index: 1;
        transition: opacity 0.2s;
      }

      &:hover::after {
        opacity: ${opacities.hover};
      }

      &:focus-visible::after {
        opacity: ${opacities.focus};
      }

      &:active::after {
        opacity: ${opacities.active};
      }
    `;
  };
