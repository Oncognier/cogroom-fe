'use client';

import styled from '@emotion/styled';

export const MethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const PaymentMethodsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

  gap: 1.2rem;
  padding-top: 1.2rem;
`;

export const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.semantic.line.normal};
`;

export const CheckboxWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  align-items: center;

  margin: 1.2rem 0;
`;

export const CheckboxLabel = styled.p`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;
