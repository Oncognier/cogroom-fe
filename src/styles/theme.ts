import { opacity, palette, semantic } from './color';
import { breakpoints, radius, ratio, shadow, spacing } from './foundation';
import { typography } from './typography';

export const theme = {
  palette,
  semantic,
  opacity,
  typography,
  spacing,
  radius,
  breakpoints,
  ratio,
  shadow,
};

export type Theme = typeof theme;
