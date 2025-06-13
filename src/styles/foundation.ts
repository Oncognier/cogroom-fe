'use client';

import { css } from '@emotion/react';

import { Shadow } from './types';

export const spacing = {
  0: '0rem',
  4: '0.4rem',
  8: '0.8rem',
  12: '1.2rem',
  16: '1.6rem',
  24: '2.4rem',
  32: '3.2rem',
  40: '4.0rem',
} as const;

export const radius = {
  0: '0rem',
  4: '0.4rem',
  8: '0.8rem',
  12: '1.2rem',
  16: '1.6rem',
  20: '2.0rem',
  24: '2.4rem',
  32: '3.2rem',
  40: '4.0rem',
} as const;

export const breakpoints = {
  desktop: '1440px',
  tablet: '768px',
  mobile: '480px',
} as const;

export const ratio = {
  '1_1': '1 / 1',
  '1_2': '1 / 2',
  '2_1': '2 / 1',
  '3_2': '3 / 2',
  '2_3': '2 / 3',
  '4_3': '4 / 3',
  '3_4': '3 / 4',
  '5_4': '5 / 4',
  '4_5': '4 / 5',
  '9_16': '9 / 16',
  '16_9': '16 / 9',
  '10_16': '10 / 16',
  '16_10': '16 / 10',
  '1_1-618': '1 / 1.618',
  '1-618_1': '1.618 / 1',
  '9_21': '9 / 21',
  '21_9': '21 / 9',
} as const;

export const shadow: Shadow = {
  emphasize: css`
    box-shadow:
      0px 0px 1px rgba(0, 0, 0, 0.08),
      0px 1px 4px rgba(0, 0, 0, 0.08),
      0px 2px 8px rgba(0, 0, 0, 0.12);
  `,
  strong: css`
    box-shadow:
      0px 0px 4px rgba(0, 0, 0, 0.08),
      0px 4px 8px rgba(0, 0, 0, 0.08),
      0px 6px 12px rgba(0, 0, 0, 0.12);
  `,
  heavy: css`
    box-shadow:
      0px 0px 8px rgba(0, 0, 0, 0.08),
      0px 8px 16px rgba(0, 0, 0, 0.08),
      0px 16px 20px rgba(0, 0, 0, 0.12);
  `,
};
