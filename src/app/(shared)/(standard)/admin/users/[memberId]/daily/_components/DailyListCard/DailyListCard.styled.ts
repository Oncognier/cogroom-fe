'use client';

import styled from '@emotion/styled';

export const DailyListCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionInfoWrapper = styled.div<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  height: 10.8rem;
  padding: 2.4rem 3.2rem;

  border: 1px solid ${({ theme }) => theme.semantic.label.assistive};
  border-bottom: ${({ $open }) => $open && 0};
  border-radius: ${({ $open }) => ($open ? '1.2rem 1.2rem 0 0' : '1.2rem')};
`;

export const MemberInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;

  width: 12rem;
  height: 2.1rem;
`;

export const Nickname = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem;

  width: 20.8rem;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  flex: 1;

  cursor: pointer;
`;

export const Question = styled.p`
  ${({ theme }) => theme.typography.body2.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Icon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
  width: 12rem;
  text-align: center;
`;
