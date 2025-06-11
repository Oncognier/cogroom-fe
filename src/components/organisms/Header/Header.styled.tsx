'use client';

import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.8rem;

  background-color: ${({ theme }) => theme.semantic.static.white};
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};
  backdrop-filter: blur(1.6rem);
  -webkit-backdrop-filter: blur(1.6rem);

  padding: 1.3rem 17rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.3rem;
  }
`;
