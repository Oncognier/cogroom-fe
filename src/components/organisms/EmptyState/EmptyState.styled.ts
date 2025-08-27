'use client';

import styled from '@emotion/styled';

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  width: 100%;
  padding: 8.45rem 0;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  padding: 1.6rem;
  color: ${({ theme }) => theme.semantic.label.assistive};
  background-color: ${({ theme }) => theme.semantic.background.normal.alternative};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Button = styled.button`
  ${({ theme }) => theme.typography.body1.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;
