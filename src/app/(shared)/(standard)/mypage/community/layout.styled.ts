'use client';

import styled from '@emotion/styled';

export const CommunityLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const CommunityHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Heading = styled.p`
  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;
