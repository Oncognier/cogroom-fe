'use client';

import styled from '@emotion/styled';

export const DateInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const DateLabel = styled.label`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const DateInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.4rem;

  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.alternative};
`;

export const DateInput = styled.p`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;

  color: ${({ theme }) => theme.semantic.label.normal};
  cursor: pointer;
`;
