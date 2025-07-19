'use client';

import styled from '@emotion/styled';

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[24]};

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

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const MainMessage = styled.p`
  ${({ theme }) => theme.typography.headline2.semibold};
  color: ${({ theme }) => theme.semantic.label.alternative};

  text-align: center;
`;
