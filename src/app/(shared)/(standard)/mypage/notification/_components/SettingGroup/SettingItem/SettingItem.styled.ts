'use client';

import styled from '@emotion/styled';

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[32]};
`;

export const Label = styled.p`
  ${({ theme }) => theme.typography.body1.semibold};

  color: ${({ theme }) => theme.semantic.label.neutral};
`;
