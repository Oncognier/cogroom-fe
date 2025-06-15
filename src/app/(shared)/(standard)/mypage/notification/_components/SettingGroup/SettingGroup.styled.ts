'use client';

import styled from '@emotion/styled';

export const SettingGroup = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const GroupTitle = styled.p`
  ${({ theme }) => theme.typography.label1.medium};

  color: ${({ theme }) => theme.semantic.label.alternative};
  background-color: ${({ theme }) => theme.semantic.fill.normal};
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[32]};
  border-radius: ${({ theme }) => theme.radius[12]};
`;
