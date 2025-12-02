'use client';

import styled from '@emotion/styled';

export const SmallBase = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30rem;
  height: 13.6rem;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  border-radius: 1.2rem;
`;

export const Close = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;
