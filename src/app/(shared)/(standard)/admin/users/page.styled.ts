'use client';

import styled from '@emotion/styled';

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const FilterHeader = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  width: 100%;
  padding: 0.8rem 0;
`;

export const SearchWrapper = styled.div`
  width: 20.3rem;
`;

export const TotalMemberCount = styled.p`
  flex: 1;

  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;

  width: 100%;
`;

export const PaginationButton = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 2.4rem 0;
`;
