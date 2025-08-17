'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const MyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  ${mqMax.desktop} {
    gap: 2.7rem;
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  gap: 6.2rem;

  ${mqMax.desktop} {
    > div:first-of-type {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const MobileContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;

  ${mqMax.desktop} {
    display: flex;
  }
`;

export const MobileProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const MobileNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const MobileUserName = styled.span`
  ${({ theme }) => theme.typography.heading2.semibold};

  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const MobileUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const MobileSettingIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  background: transparent;
  border: none;

  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.semantic.label.alternative};
  }

  &:hover svg {
    color: ${({ theme }) => theme.semantic.label.normal};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  justify-content: space-between;
  align-items: center;

  padding: 20px 30px;
  max-width: 720px;
  width: 100%;
  height: 64px;

  background: ${({ theme }) => theme.semantic.background.normal.normal};
  border: 1px solid #c7c7c8;
  border-radius: 12px;

  cursor: pointer;

  ${mqMax.desktop} {
    display: flex;
  }

  &:hover {
    background: ${({ theme }) => theme.semantic.background.normal.alternative};
  }

  &:active {
    background: ${({ theme }) => theme.semantic.fill.alternative};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.semantic.label.alternative};
    flex-shrink: 0;
  }
`;

export const MobileMenuButtonText = styled.span`
  ${({ theme }) => theme.typography.label1.semibold};

  color: ${({ theme }) => theme.semantic.label.normal};
`;
