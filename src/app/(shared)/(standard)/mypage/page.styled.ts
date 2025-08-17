'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

import { mqMax } from '@/styles/foundation';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BannerWrapper = styled.div`
  display: flex;
  gap: 1.6rem;

  width: 100%;
`;

export const ExternalLink = styled.a`
  position: relative;
  width: 100%;
`;

export const BannerImage = styled(Image)`
  width: 100%;
  height: auto;

  cursor: pointer;
  object-fit: cover;
`;

export const StreakWrapper = styled.div`
  display: flex;
  gap: 0.4rem;

  ${mqMax.desktop} {
    display: none;
  }
`;

export const StreakMessage = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const Highlight = styled.span`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const GreetingMessage = styled.p`
  ${({ theme }) => theme.typography.title2.bold};
  color: ${({ theme }) => theme.semantic.label.normal};

  ${mqMax.desktop} {
    display: none;
  }
`;

export const ChronotypeMessage = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  ${mqMax.desktop} {
    display: none;
  }
`;

export const Report = styled.div`
  position: relative;
  display: flex;
  gap: 0.4rem;

  width: 100%;
  height: 41.5rem;
  border: 1px solid rgba(190, 194, 197, 0.4);
  border-radius: 1.2rem;

  overflow: hidden;
`;

export const SummarySectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`;

export const MobileProfile = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  padding: 16px 0;

  ${mqMax.desktop} {
    display: flex;
  }
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
  flex: 1;
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

export const MenuButton = styled.button`
  display: none;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 64px;
  max-width: 720px;

  padding: 20px 30px;
  margin-top: 16px;

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

export const MenuButtonText = styled.span`
  ${({ theme }) => theme.typography.label1.semibold};

  color: ${({ theme }) => theme.semantic.label.normal};
`;
