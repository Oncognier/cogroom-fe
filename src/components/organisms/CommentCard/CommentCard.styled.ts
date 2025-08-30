'use client';

import styled from '@emotion/styled';

export const CommentCard = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 2.2rem;

  width: 100%;
  padding: 2.4rem 3.2rem;
`;

export const CommentLeft = styled.div`
  display: flex;
  width: 29.6rem;
  gap: 1.2rem;

  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Icon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Comment = styled.p`
  ${({ theme }) => theme.typography.body2.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  max-width: 40.4rem;

  gap: 0.8rem;

  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const Post = styled.div`
  display: flex;
  align-items: center;

  gap: 0.8rem;
`;

export const PostIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
`;

export const PostTitle = styled.p`
  max-width: 25rem;
  ${({ theme }) => theme.typography.label1.regular};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentCreatedAt = styled.p`
  width: 12rem;
  ${({ theme }) => theme.typography.label1.regular};
  text-align: center;
`;
