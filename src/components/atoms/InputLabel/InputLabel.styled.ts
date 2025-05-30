'use client';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

const InputLabel = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

const RequiredBadge = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.status.destructive};

  margin-top: -0.1rem;
`;

const S = {
  Container,
  InputLabel,
  RequiredBadge,
};

export default S;
