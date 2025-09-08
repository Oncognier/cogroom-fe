'use client';

import styled from '@emotion/styled';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.title2.bold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;
