'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;
