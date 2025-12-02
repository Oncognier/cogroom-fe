'use client';

import styled from '@emotion/styled';

export const LargeBase = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40.7rem;
  height: 45rem;
  padding: 1.6rem 6rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  border-radius: 0.8rem;
`;

export const Close = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;
