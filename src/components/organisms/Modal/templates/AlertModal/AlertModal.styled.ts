'use client';

import styled from '@emotion/styled';

export const AlertModal = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30rem;
  padding: 4rem 2.4rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  border-radius: 1.2rem;
`;
