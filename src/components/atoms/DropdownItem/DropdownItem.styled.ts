'use client';

import styled from '@emotion/styled';

export const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 1.2rem;

  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
  background-color: ${({ theme }) => theme.semantic.static.white};
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.semantic.background.elevated.normal};
  }

  &:focus {
    outline: none;
  }
`;
