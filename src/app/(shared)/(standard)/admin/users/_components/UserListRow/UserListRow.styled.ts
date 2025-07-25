'use client';

import styled from '@emotion/styled';

export const UserListRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  padding: 2.4rem 3.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};

  &:last-child {
    border-bottom: none;
  }

  cursor: pointer;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 12rem;
`;

export const UserNameWithRole = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.8rem;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.4rem;
`;

export const UserName = styled.p`
  ${({ theme }) => theme.typography.body2.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Email = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  width: 12rem;
  text-align: center;
`;
