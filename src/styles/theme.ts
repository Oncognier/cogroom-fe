import { opacity, palette, semantic, brandColors } from './color';
import { breakpoints, ratio, shadow } from './foundation';
import { typography } from './typography';

export const theme = {
  palette,
  semantic,
  opacity,
  typography,
  breakpoints,
  ratio,
  shadow,
  brandColors,
};

export type Theme = typeof theme;
