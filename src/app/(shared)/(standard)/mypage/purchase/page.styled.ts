'use client';

import styled from '@emotion/styled';

export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100%;
`;

export const Heading = styled.p`
  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;
