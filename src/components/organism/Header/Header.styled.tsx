'use client';

import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 66px;

  background-color: ${({ theme }) => theme.semantic.static.white};
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  padding: 13px 170px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 13px;
  }
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

const NavLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  height: 26px;
`;

const S = {
  Header,
  LeftNav,
  RightNav,
  NavLogin,
};

export default S;
