'use client';

import styled from '@emotion/styled';

export const SearchFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 100%;
  padding: 0.8rem 0;
`;

export const FilterContainer = styled.form`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  width: 100%;
`;

export const FieldWrapper = styled.div`
  width: 20.3rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;
