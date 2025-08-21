'use client';

import styled from '@emotion/styled';

import { mqMax, mqMin } from '@/styles/foundation';

export const NicknameForm = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;

  gap: 1.6rem;

  ${mqMin.tablet} {
    & > *:first-child {
      max-width: 34.5rem;
      flex: 1;
    }
  }

  ${mqMax.tablet} {
    display: flex;
    align-items: flex-end;
    width: 100%;

    gap: 1.5rem;

    & > *:first-child {
      flex: 1;
    }
  }
`;

export const ButtonWrapper = styled.div<{ isError?: boolean }>`
  ${({ isError }) => isError && 'margin-bottom: 25px;'}
`;
