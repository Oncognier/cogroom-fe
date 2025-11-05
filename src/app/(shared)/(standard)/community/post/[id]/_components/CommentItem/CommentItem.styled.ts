'use client';

import styled from '@emotion/styled';

import { ConnectorBase } from '../ConnectorBase/ConnectorBase.styled';

export const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;
`;

export const CommentItemLeft = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

export const BlueLine = styled.div`
  width: 2px;
  background-color: ${({ theme }) => theme.palette.blue[90]};
  border-radius: 2px;
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

  position: relative;
`;

/**
 * 댓글 목록에서 "답글 n개" 버튼 왼쪽에 표시되는 ㄴ자형 연결선
 */
export const ReplyTextConnector = styled(ConnectorBase)`
  left: -2.9rem;
  top: -0.3rem;
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

export const CommentFieldWrapper = styled.div`
  position: relative;
`;

/**
 * 새로운 답글 입력창(CommentField) 왼쪽에 표시되는 ㄴ자형 연결선
 */
export const CommentFieldConnector = styled(ConnectorBase)`
  left: -2.9rem;
  top: 1.2rem;
`;

export const ReplyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;
