'use client';

import styled from '@emotion/styled';

export const Marketing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  margin-bottom: 16.5rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title2.bold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 0.4rem;

  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const ContentNumber = styled.p`
  width: 1.6rem;
  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;
