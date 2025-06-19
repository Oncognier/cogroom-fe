'use client';

import styled from '@emotion/styled';


export const Container = styled.div`
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[40]};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.title2.bold}
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.body1.regular}
`;

export const Content = styled.div``;
