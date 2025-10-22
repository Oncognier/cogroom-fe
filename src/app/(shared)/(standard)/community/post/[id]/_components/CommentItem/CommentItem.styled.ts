'use client';

import styled from '@emotion/styled';

export const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;
`;

export const CommentItemLeft = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const CommentItemRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const ShowReplyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ShowReplyText = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const ChevronIcon = styled.div`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const ReplyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;
