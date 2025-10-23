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
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

export const BlueLine = styled.div`
  width: 2px;
  background: ${({ theme }) => theme.palette.blue[90]}; // 프로젝트 톤에 맞춰 색상 교체
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
 * 댓글 목록에서 "답글 n개" 버튼 왼쪽에 표시되는 작은 ㄴ자형 파란 연결선입니다.
 * 부모 댓글의 본문과 답글 버튼을 시각적으로 연결하는 역할을 합니다.
 */
export const ReplyTextConnector = styled.div`
  position: absolute;
  left: -2.9rem;
  top: -0.3rem;
  width: 1.5rem;
  height: 1.4rem;

  background: transparent;
  border-left: 2px solid ${({ theme }) => theme.palette.blue[90]};
  border-bottom: 2px solid ${({ theme }) => theme.palette.blue[90]};
  border-right: none;
  border-radius: 0 0 0 4rem;
  z-index: 1;
  pointer-events: none;
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
 * 새로운 답글 입력창(CommentField)이 열릴 때, 입력창 왼쪽에 표시되는 ㄴ자형 파란 연결선입니다.
 * 부모 댓글과 자새로 생성되는 입력창을 시각적으로 연결하는 역할을 합니다.
 */
export const CommentFieldConnector = styled.div`
  position: absolute;
  left: -2.9rem;
  top: 1.2rem;
  width: 1.5rem;
  height: 1.4rem;

  background: transparent;
  border-left: 2px solid ${({ theme }) => theme.palette.blue[90]};
  border-bottom: 2px solid ${({ theme }) => theme.palette.blue[90]};
  border-right: none;
  border-radius: 0 0 0 4rem;
  z-index: 1;
  pointer-events: none;
`;

export const ReplyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;
