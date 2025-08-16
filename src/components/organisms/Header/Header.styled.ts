'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { mqMin } from '@/styles/foundation';

const container = css`
  width: 100%;
  max-width: 1100px;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.semantic.static.white};
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};

  ${mqMin.desktop} {
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const HeaderInner = styled.div`
  ${container};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.9rem;
`;

export const SmallScreenNav = styled.nav`
  ${container};
  display: flex;
  align-items: center;
  height: 4.2rem;

  ${mqMin.desktop} {
    display: none;
  }
`;
