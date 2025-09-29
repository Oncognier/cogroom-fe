'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const CommunityLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const CommunityHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Heading = styled.p`
  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 8.3rem;
  right: 1.6rem;
  z-index: 1000;

  display: none;

  ${mqMax.tablet} {
    display: block;
  }
`;
