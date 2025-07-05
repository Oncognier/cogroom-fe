'use client';

import styled from '@emotion/styled';

export const MenuDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding: 1.2rem 1.6rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  ${({ theme }) => theme.shadow.normal}
  border-radius: 0.8rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.semantic.line.normal};
`;
