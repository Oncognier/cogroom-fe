'use client';

import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 4rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.title2.bold}
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.body1.regular}
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;
