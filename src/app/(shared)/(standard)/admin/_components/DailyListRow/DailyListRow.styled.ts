'use client';

import styled from '@emotion/styled';

export const DailyListRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  height: 10.8rem;
  padding: 2.4rem 3.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};
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

export const Question = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${({ theme }) => theme.typography.body2.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  width: 12rem;
  text-align: center;
`;
