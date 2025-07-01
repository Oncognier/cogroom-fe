'use client';

import styled from '@emotion/styled';

export const DailyAnswerEdit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;
