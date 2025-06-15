'use client';

import styled from '@emotion/styled';

export const NotificationLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`;

export const Heading = styled.p`
  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;
