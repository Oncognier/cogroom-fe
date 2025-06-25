import { SerializedStyles } from '@emotion/serialize';

type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type TypographyStyle = Record<FontWeight, SerializedStyles>;

export type Typography = {
  display1: Pick<TypographyStyle, 'regular' | 'medium' | 'bold'>;
  display2: Pick<TypographyStyle, 'regular' | 'medium' | 'bold'>;
  title1: Pick<TypographyStyle, 'regular' | 'medium' | 'bold'>;
  title2: Pick<TypographyStyle, 'regular' | 'medium' | 'bold'>;
  title3: Pick<TypographyStyle, 'regular' | 'medium' | 'bold'>;
  heading1: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  heading2: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  headline1: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  headline2: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  body1: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  body1Reading: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  body2: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  label1: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  label2: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  caption1: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
  caption2: Pick<TypographyStyle, 'regular' | 'medium' | 'semibold'>;
};

type ShadowLevel = 'normal' | 'emphasize' | 'strong' | 'heavy';

export type Shadow = {
  [key in ShadowLevel]: SerializedStyles;
};

export type PaletteLevel = 0 | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 96 | 97 | 98 | 99 | 100;

export type ColorHex = `#${string}`;

export type PaletteShades = {
  [key in PaletteLevel]?: ColorHex;
};

export type PaletteGroup =
  | 'common'
  | 'neutral'
  | 'coolNeutral'
  | 'blue'
  | 'red'
  | 'green'
  | 'orange'
  | 'redOrange'
  | 'lime'
  | 'cyan'
  | 'lightBlue'
  | 'violet'
  | 'purple'
  | 'pink';

export type Palette = {
  [key in PaletteGroup]: PaletteShades;
};
