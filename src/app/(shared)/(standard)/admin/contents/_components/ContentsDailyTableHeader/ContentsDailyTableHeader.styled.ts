'use client';

import styled from '@emotion/styled';

export const ContentsDailyTableHeader = styled.div`
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

export const CategoryText = styled.p`
  ${({ theme }) => theme.typography.label1.medium};
  color: ${({ theme }) => theme.semantic.label.alternative};

  width: 20.8rem;
  text-align: center;
`;

export const ExpandText = styled.p`
  ${({ theme }) => theme.typography.label1.medium};
  color: ${({ theme }) => theme.semantic.label.alternative};

  flex: 1;
  text-align: center;
`;
