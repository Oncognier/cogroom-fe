'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  width: 40.7rem;
  height: 45rem;
  padding: 0 6rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  border-radius: 0.8rem;
`;

export const Close = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;
