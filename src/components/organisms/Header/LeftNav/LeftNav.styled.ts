'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const DesktopContainer = styled.div`
  ${mqMax.desktop} {
    display: none;
  }
`;
