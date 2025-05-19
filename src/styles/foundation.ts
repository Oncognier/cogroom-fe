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
};

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
};

export const breakpoints = {
  desktop: '1440px',
  tablet: '768px',
  mobile: '480px',
};

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
