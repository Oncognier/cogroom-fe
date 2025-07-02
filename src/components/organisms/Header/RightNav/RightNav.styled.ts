'use client';

import styled from '@emotion/styled';

export const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  height: 2.6rem;
`;

export const UserWrapper = styled.div<{ memberRole?: string }>`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  height: 4.2rem;

  padding: 0.4rem 1.2rem 0.4rem 0.8rem;
  border-radius: 1000px;

  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.primary.normal};
  border: ${({ theme, memberRole }) =>
    memberRole === 'CONTENT_PROVIDER' && `1px solid ${theme.semantic.primary.normal}`};
  background-color: ${({ theme, memberRole }) => memberRole === 'ADMIN' && theme.semantic.background.elevated.normal};

  cursor: pointer;
`;

export const UserIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.6rem;
  height: 2.6rem;
`;
