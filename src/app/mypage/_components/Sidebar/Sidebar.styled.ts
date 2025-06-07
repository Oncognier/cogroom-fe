'use client';

import styled from '@emotion/styled';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[40]};

  width: 27.1rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const UserName = styled.p`
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

const SettingIcon = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.semantic.label.assistive};
`;

const SidebarNavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]};
`;

const Logout = styled.p`
  ${({ theme }) => theme.typography.body2.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

const S = {
  Sidebar,
  Profile,
  NameWrapper,
  UserName,
  SettingIcon,
  SidebarNavList,
  Logout,
};

export default S;
