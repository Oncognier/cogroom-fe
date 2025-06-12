'use client';

import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  height: 6.9rem;

  background-color: ${({ theme }) => theme.semantic.static.white};
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  max-width: 1100px;
  padding: 0 2rem;
  margin: 0 auto;
`;
