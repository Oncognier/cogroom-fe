'use client';

import styled from '@emotion/styled';

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const AlarmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.typography.label1.regular};
  background-color: ${({ theme }) => theme.semantic.background.elevated.normal};
  color: ${({ theme }) => theme.semantic.primary.normal};

  border-radius: 1.2rem;

  padding: 1.2rem 2.4rem;
`;
