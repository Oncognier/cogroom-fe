'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

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

export const BannerImage = styled(Image)`
  flex: 1;
  width: 100%;
  height: auto;
  cursor: pointer;
  display: block;
  object-fit: cover;
`;

export const StreakWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
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
`;

export const ChronotypeMessage = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const Report = styled.div`
  position: relative;
  display: flex;
  gap: 0.4rem;

  width: 100%;
  height: 41.5rem;
  border: 1px solid rgba(190, 194, 197, 0.4);
  border-radius: ${({ theme }) => theme.radius[12]};

  overflow: hidden;
`;

export const SummarySectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`;
