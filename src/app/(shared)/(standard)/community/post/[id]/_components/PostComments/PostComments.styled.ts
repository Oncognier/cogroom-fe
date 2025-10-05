'use client';

import styled from '@emotion/styled';

export const PostCommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const CommentsHeader = styled.div`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const CommentsTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
