'use client';

import { css } from '@emotion/react';
import localFont from 'next/font/local';

import { TypographyToken } from './types';

export const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

const baseTextStyle = {
  display1: css`
    font-size: 5.6rem;
    line-height: 7.2rem;
    letter-spacing: -0.0319em;
  `,
  display2: css`
    font-size: 4rem;
    line-height: 5.2rem;
    letter-spacing: -0.0282em;
  `,
  title1: css`
    font-size: 3.6rem;
    line-height: 4.8rem;
    letter-spacing: -0.027em;
  `,
  title2: css`
    font-size: 2.8rem;
    line-height: 3.8rem;
    letter-spacing: -0.0236em;
  `,
  title3: css`
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: -0.023em;
  `,
  heading1: css`
    font-size: 2.2rem;
    line-height: 3rem;
    letter-spacing: -0.0194em;
  `,
  heading2: css`
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: -0.012em;
  `,
  headline1: css`
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.002em;
  `,
  headline2: css`
    font-size: 1.7rem;
    line-height: 2.4rem;
    letter-spacing: 0em;
  `,
  body1: css`
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: 0.0057em;
  `,
  body1Reading: css`
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: 0.0057em;
  `,
  body2: css`
    font-size: 1.5rem;
    line-height: 2.2rem;
    letter-spacing: 0.0096em;
  `,
  label1: css`
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.0145em;
  `,
  label2: css`
    font-size: 1.3rem;
    line-height: 1.8rem;
    letter-spacing: 0.0194em;
  `,
  caption1: css`
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.0252em;
  `,
  caption2: css`
    font-size: 1.1rem;
    line-height: 1.4rem;
    letter-spacing: 0.0311em;
  `,
};

const weights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const typography: TypographyToken = {
  display1: {
    regular: css`
      ${baseTextStyle.display1};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.display1};
      font-weight: ${weights.medium};
    `,
    bold: css`
      ${baseTextStyle.display1};
      font-weight: ${weights.bold};
    `,
  },
  display2: {
    regular: css`
      ${baseTextStyle.display2};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.display2};
      font-weight: ${weights.medium};
    `,
    bold: css`
      ${baseTextStyle.display2};
      font-weight: ${weights.bold};
    `,
  },
  title1: {
    regular: css`
      ${baseTextStyle.title1};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.title1};
      font-weight: ${weights.medium};
    `,
    bold: css`
      ${baseTextStyle.title1};
      font-weight: ${weights.bold};
    `,
  },
  title2: {
    regular: css`
      ${baseTextStyle.title2};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.title2};
      font-weight: ${weights.medium};
    `,
    bold: css`
      ${baseTextStyle.title2};
      font-weight: ${weights.bold};
    `,
  },
  title3: {
    regular: css`
      ${baseTextStyle.title3};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.title3};
      font-weight: ${weights.medium};
    `,
    bold: css`
      ${baseTextStyle.title3};
      font-weight: ${weights.bold};
    `,
  },
  heading1: {
    regular: css`
      ${baseTextStyle.heading1};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.heading1};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.heading1};
      font-weight: ${weights.semibold};
    `,
  },
  heading2: {
    regular: css`
      ${baseTextStyle.heading2};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.heading2};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.heading2};
      font-weight: ${weights.semibold};
    `,
  },
  headline1: {
    regular: css`
      ${baseTextStyle.headline1};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.headline1};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.headline1};
      font-weight: ${weights.semibold};
    `,
  },
  headline2: {
    regular: css`
      ${baseTextStyle.headline2};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.headline2};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.headline2};
      font-weight: ${weights.semibold};
    `,
  },
  body1: {
    regular: css`
      ${baseTextStyle.body1};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.body1};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.body1};
      font-weight: ${weights.semibold};
    `,
  },
  body1Reading: {
    regular: css`
      ${baseTextStyle.body1Reading};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.body1Reading};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.body1Reading};
      font-weight: ${weights.semibold};
    `,
  },
  body2: {
    regular: css`
      ${baseTextStyle.body2};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.body2};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.body2};
      font-weight: ${weights.semibold};
    `,
  },
  label1: {
    regular: css`
      ${baseTextStyle.label1};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.label1};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.label1};
      font-weight: ${weights.semibold};
    `,
  },
  label2: {
    regular: css`
      ${baseTextStyle.label2};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.label2};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.label2};
      font-weight: ${weights.semibold};
    `,
  },
  caption1: {
    regular: css`
      ${baseTextStyle.caption1};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.caption1};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.caption1};
      font-weight: ${weights.semibold};
    `,
  },
  caption2: {
    regular: css`
      ${baseTextStyle.caption2};
      font-weight: ${weights.regular};
    `,
    medium: css`
      ${baseTextStyle.caption2};
      font-weight: ${weights.medium};
    `,
    semibold: css`
      ${baseTextStyle.caption2};
      font-weight: ${weights.semibold};
    `,
  },
};
