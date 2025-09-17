'use client';

import styled from '@emotion/styled';

export const PostCommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CommentsHeader = styled.div`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
  padding: 1rem 0;
`;

export const EmptyComments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.semantic.label.assistive};
  ${({ theme }) => theme.typography.body2.regular};
`;
