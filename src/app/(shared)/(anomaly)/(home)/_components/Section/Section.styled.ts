'use client';

import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[40]};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.title2.bold}
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.body1.regular}
  color: ${({ theme }) => theme.semantic.label.normal};
`;
