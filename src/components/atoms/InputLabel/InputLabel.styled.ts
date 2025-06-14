'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const InputLabel = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const RequiredBadge = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.status.destructive};

  margin-top: -0.1rem;
`;
