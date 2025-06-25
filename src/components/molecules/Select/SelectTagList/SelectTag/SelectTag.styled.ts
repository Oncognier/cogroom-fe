'use client';

import styled from '@emotion/styled';

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.3rem 0.56rem;
  background-color: rgba(70, 119, 200, 0.075);
  border-radius: 0.4rem;
`;

export const TagLabel = styled.p`
  ${({ theme }) => theme.typography.label2.semibold};
  color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const TagRemoveButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;

  color: ${({ theme }) => theme.semantic.primary.normal};
  background-color: transparent;
`;
