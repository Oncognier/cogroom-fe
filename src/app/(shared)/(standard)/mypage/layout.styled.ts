'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const MyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  ${mqMax.desktop} {
    gap: 2.7rem;

    & > *:last-child {
      margin-top: 3.3rem;
    }
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
  gap: 1.6rem;

  ${mqMax.desktop} {
    display: flex;
  }
`;

export const MobileProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;

export const MobileNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
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
  gap: 0.4rem;
`;

export const MobileSettingIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.4rem;
  height: 2.4rem;

  background: transparent;
  border: none;

  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
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

  padding: 2rem 3rem;
  width: 100%;
  height: 6.4rem;

  background: ${({ theme }) => theme.semantic.background.normal.normal};
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 1.2rem;

  cursor: pointer;

  ${mqMax.desktop} {
    display: flex;
    max-width: 100%;
  }

  &:hover {
    background: ${({ theme }) => theme.semantic.background.normal.alternative};
  }

  &:active {
    background: ${({ theme }) => theme.semantic.fill.alternative};
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.semantic.label.alternative};
    flex-shrink: 0;
  }
`;

export const MobileMenuButtonText = styled.span`
  ${({ theme }) => theme.typography.label1.semibold};

  color: ${({ theme }) => theme.semantic.label.normal};
`;
