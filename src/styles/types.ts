import { SerializedStyles } from '@emotion/serialize';

type FontWeightName = 'regular' | 'medium' | 'semibold' | 'bold';

type TypographyLevel =
  | 'display1'
  | 'display2'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'heading1'
  | 'heading2'
  | 'headline1'
  | 'headline2'
  | 'body1'
  | 'body1Reading'
  | 'body2'
  | 'label1'
  | 'label2'
  | 'caption1'
  | 'caption2';

type TypographyWeightMap = {
  [key in FontWeightName]?: SerializedStyles;
};

export type Typography = {
  [key in TypographyLevel]: TypographyWeightMap;
};

type ShadowLevel = 'emphasize' | 'strong' | 'heavy';

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
