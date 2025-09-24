'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const CommentListRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;

  width: 100%;
  padding: 2.4rem 3.2rem;

  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};

  ${mqMax.desktop} {
    flex-direction: column;
  }
`;

export const CommentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  max-width: 29.6rem;
`;

export const CommentIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Comment = styled.p`
  max-width: 26rem;

  ${({ theme }) => theme.typography.body2.medium};
  color: ${({ theme }) => theme.semantic.label.normal};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;

  max-width: 40.4rem;

  ${mqMax.desktop} {
    max-width: none;
    width: 100%;
    justify-content: space-between;
  }

  ${mqMax.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Post = styled.div`
  display: flex;
  align-items: center;

  gap: 0.8rem;
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const PostIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const PostTitle = styled.p`
  width: 25rem;

  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentCreatedAt = styled.p`
  width: 12rem;
  text-align: center;

  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;
