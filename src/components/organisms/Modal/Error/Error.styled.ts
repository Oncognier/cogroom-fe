'use client';

import styled from '@emotion/styled';

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};

  text-align: center;
`;
