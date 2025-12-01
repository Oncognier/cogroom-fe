'use client';

import styled from '@emotion/styled';

export const SearchListContianer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;

  padding: 1.2rem 3.2rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.alternative};
`;

export const LeftSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
`;

export const SearchListTitle = styled.span`
  ${({ theme }) => theme.typography.body2.regular}
  color: ${({ theme }) => theme.semantic.label.alternative}
`;
