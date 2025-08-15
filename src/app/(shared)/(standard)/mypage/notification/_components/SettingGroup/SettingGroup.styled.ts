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
  padding: 1.2rem 3.2rem;
  border-radius: 1.2rem;
`;
