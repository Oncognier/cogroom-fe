'use client';

import styled from '@emotion/styled';

export const SupportContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.body1.medium};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const Email = styled.p`
  width: 100%;
  padding: 0.8rem 3.2rem;
  border: 1px solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 1000px;
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  text-align: center;
`;
