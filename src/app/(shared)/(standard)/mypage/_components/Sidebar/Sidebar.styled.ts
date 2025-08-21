'use client';

import styled from '@emotion/styled';

import { getInteraction } from '@/styles/helpers/interaction';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 20rem;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const UserName = styled.p`
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const SettingIcon = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.semantic.label.assistive};
`;

export const SidebarNavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Logout = styled.button`
  ${({ theme }) => theme.typography.body2.semibold};
  color: ${({ theme }) => theme.semantic.label.alternative};
  ${({ theme }) => getInteraction('normal', theme.semantic.label.alternative)(theme)};

  display: flex;
  align-items: center;

  height: 3rem;
  border-radius: 0.4rem;
`;
