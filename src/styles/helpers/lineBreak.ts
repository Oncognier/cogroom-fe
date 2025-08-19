'use client';

import styled from '@emotion/styled';
import { mqMax } from '../foundation';

export const LineBreakTablet = styled.br`
  display: none;

  ${mqMax.desktop} {
    display: block;
  }
`;

export const LineBreakMobile = styled.br`
  display: none;

  ${mqMax.tablet} {
    display: block;
  }
`;
