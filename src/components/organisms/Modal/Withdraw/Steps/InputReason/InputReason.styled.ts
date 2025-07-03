'use client';

import styled from '@emotion/styled';

export const InputReason = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title3.bold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;
