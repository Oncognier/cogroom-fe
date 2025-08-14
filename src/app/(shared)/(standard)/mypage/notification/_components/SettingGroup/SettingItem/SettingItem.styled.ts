'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
  padding: 2.4rem 3.2rem;
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const Label = styled.p`
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.primary.normal};
`;
