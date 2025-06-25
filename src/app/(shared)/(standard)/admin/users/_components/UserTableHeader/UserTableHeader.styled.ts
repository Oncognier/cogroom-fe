'use client';

import styled from '@emotion/styled';

export const UserTableHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1.2rem 7.2rem 1.2rem 3.2rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.semantic.fill.normal};
`;

export const FixText = styled.p`
  ${({ theme }) => theme.typography.label1.medium};
  color: ${({ theme }) => theme.semantic.label.alternative};

  width: 12rem;
  text-align: center;
`;

export const ExpandText = styled.p`
  ${({ theme }) => theme.typography.label1.medium};
  color: ${({ theme }) => theme.semantic.label.alternative};

  flex: 1;
`;

export const UserName = styled.p`
  ${({ theme }) => theme.typography.body2.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Email = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const JoinedAt = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  width: 12rem;
  text-align: center;
`;
