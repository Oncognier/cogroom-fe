'use client';

import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  position: relative;
`;

export const DotsIcon = styled.svg`
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const MenuDropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  width: 15rem;
`;
