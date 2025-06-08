'use client';

import styled from '@emotion/styled';

interface DateCellProps {
  dimmed?: boolean;
  today?: boolean;
  isAnswered?: boolean;
}

export const CalendarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[16]};

  padding: 3rem 1.5rem 5rem 1.5rem;

  border-radius: ${({ theme }) => theme.radius[12]};
  background-color: ${({ theme }) => theme.semantic.background.elevated.normal};
`;

export const CalendarContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 55rem;
  width: 100%;
  margin: 0 auto;

  gap: ${({ theme }) => theme.spacing[16]};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.headline1.semibold}
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[16]};

  max-width: 55rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem;

  background-color: ${({ theme }) => theme.semantic.static.white};
  border-radius: ${({ theme }) => theme.radius[12]};
`;

export const MonthSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};

  ${({ theme }) => theme.typography.body1.semibold}
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.8rem;
`;

export const WeekDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.typography.label1.medium}
  color: ${({ theme }) => theme.semantic.label.assistive};
`;

export const DateCell = styled.div<DateCellProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius[40]};
  text-align: center;

  ${({ theme }) => theme.typography.label1.medium}
  color: ${({ theme }) => theme.semantic.label.assistive};
  background-color: ${({ theme, isAnswered }) =>
    isAnswered ? theme.semantic.background.elevated.normal : theme.semantic.fill.strong};
`;

export const BreadcrumbChevron = styled.div`
  display: flex;
  align-items: center;

  width: 16px;
  height: 16px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
