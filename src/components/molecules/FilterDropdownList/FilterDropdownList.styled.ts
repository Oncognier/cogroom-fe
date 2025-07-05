'use client';

import styled from '@emotion/styled';

export const FilterDropdownList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0.4rem 0.8rem;
  border-radius: 1.2rem;

  background-color: ${({ theme }) => theme.semantic.static.white};
`;
