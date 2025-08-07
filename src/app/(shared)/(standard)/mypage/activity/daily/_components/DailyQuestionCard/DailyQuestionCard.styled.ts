'use client';

import styled from '@emotion/styled';

export const DailyQuestionCard = styled.div`
  display: flex;
  gap: 3.2rem;

  width: 100%;
`;

export const QuestionAnswerGroup = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.6rem 0.15rem;
`;

export const DateText = styled.p`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const WeekdayText = styled.p`
  ${({ theme }) => theme.typography.label2.semibold};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;
