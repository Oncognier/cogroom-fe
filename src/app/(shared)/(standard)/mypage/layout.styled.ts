'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const MyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  ${mqMax.lg} {
    gap: 27px;
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  gap: 6.2rem;

  ${mqMax.lg} {
    > div:first-of-type {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const MobileContianer = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;

  ${mqMax.lg} {
    display: flex;
  }
`;

export const MobileProfileSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  width: 100%;
  max-width: 720px;
  height: 64px;
  padding: 20px 30px;
  background: ${({ theme }) => theme.semantic.background.normal.normal};
  border: 1px solid #c7c7c8;
  border-radius: 12px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;

  ${mqMax.lg} {
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
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.semantic.label.normal};
`;
