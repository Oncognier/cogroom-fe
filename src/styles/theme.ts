import { opacity, palette, semantic } from './color';
import { breakpoints, radius, shadow, spacing } from './foundation';
import { typography } from './typography';

export const theme = {
  palette,
  semantic,
  opacity,
  typography,
  spacing,
  radius,
  breakpoints,
  shadow,
};

export type Theme = typeof theme;
