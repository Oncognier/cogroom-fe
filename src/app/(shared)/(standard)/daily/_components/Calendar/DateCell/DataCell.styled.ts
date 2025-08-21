'use client';

import styled from '@emotion/styled';

interface DateCellProps {
  isAnswered?: boolean;
}

export const DateCell = styled.div<DateCellProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  border-radius: 4rem;
  text-align: center;

  ${({ theme }) => theme.typography.label1.medium}
  color: ${({ theme }) => theme.semantic.label.assistive};
  background-color: ${({ theme, isAnswered }) =>
    isAnswered ? theme.semantic.background.elevated.normal : theme.semantic.fill.strong};
`;
