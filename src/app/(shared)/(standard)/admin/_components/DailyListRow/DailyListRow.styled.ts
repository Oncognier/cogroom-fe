'use client';

import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export interface DailyListRowStyleProps {
  $variant: 'row' | 'card';
  $open?: boolean;
}

const variantStyles = ({ theme, $variant, $open }: { theme: Theme } & DailyListRowStyleProps) => {
  if ($variant === 'card') {
    return css`
      border: 1px solid ${theme.semantic.label.assistive};
      border-bottom: ${$open && 0};
      border-radius: ${$open ? '1.2rem 1.2rem 0 0' : '1.2rem'};
    `;
  }

  return css`
    border-bottom: 1px solid ${theme.semantic.line.normal};
    border-radius: 0;
  `;
};

export const DailyListRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionInfoWrapper = styled.div<DailyListRowStyleProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  height: 10.8rem;
  padding: 2.4rem 3.2rem;

  ${variantStyles};
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

export const QuestionWrapper = styled.div<{ $clickable?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  flex: 1;

  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
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
