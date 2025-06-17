'use client';

import styled from '@emotion/styled';

export const StreakSummaryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.8rem 3rem;
  border-radius: ${({ theme }) => theme.radius[12]};
  background-color: ${({ theme }) => theme.semantic.background.elevated.normal};
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MainText = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const StreakDayText = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.primary.normal};
`;
