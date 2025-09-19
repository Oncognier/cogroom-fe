'use client';

import styled from '@emotion/styled';

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const EmptyText = styled.p`
  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.semantic.label.assistive};
  margin: 0;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
