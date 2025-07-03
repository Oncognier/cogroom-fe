'use client';

import styled from '@emotion/styled';

export const WithdrawComplete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title3.bold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
