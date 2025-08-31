'use client';

import styled from '@emotion/styled';

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ theme }) => theme.typography.label1.medium};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const Icon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  transform: rotate(90deg);

  color: ${({ theme }) => theme.semantic.label.alternative};
`;
