'use client';

import styled from '@emotion/styled';

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const FilterHeader = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`;

export const PageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const PageTitle = styled.div`
  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 2.4rem 0;
`;
