import { opacity, palette, semantic, brandColors, cogroom } from './color';
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
  cogroom,
};

export type Theme = typeof theme;
