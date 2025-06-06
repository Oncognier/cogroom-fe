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

const UserName = styled.p`
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
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
  UserName,
  SidebarNavList,
  Logout,
};

export default S;
