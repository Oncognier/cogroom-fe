'use client';

import styled from '@emotion/styled';

export const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const CommentFirstBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  position: relative;
`;

export const CommentSecondBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
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
