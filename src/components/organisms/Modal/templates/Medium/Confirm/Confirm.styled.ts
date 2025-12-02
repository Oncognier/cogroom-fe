'use client';

import styled from '@emotion/styled';

export const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title3.bold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body1Reading.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
`;
