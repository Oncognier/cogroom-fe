'use client';

import styled from '@emotion/styled';

import { shakeAnimation } from '@/styles/helpers/animations';

export const InputCount = styled.div<{ isOverLimit?: boolean; isShaking?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1.2rem;

  ${({ theme }) => theme.typography.label2.regular}
  color: ${({ theme, isOverLimit }) =>
    isOverLimit ? theme.semantic.status.destructive : theme.semantic.primary.normal};

  ${({ isShaking }) => isShaking && shakeAnimation}
`;
