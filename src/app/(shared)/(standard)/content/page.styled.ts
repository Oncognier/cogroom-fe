'use client';

import styled from '@emotion/styled';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const BannerWrapper = styled.div`
  position: relative;
  aspect-ratio: 1060 / 566;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1.2rem;
  padding: 0.4rem;

  img {
    object-fit: contain;
    z-index: -1;
  }
`;

export const BannerTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: 100%;
  height: 100%;
`;

export const BannerTitle = styled.p`
  ${({ theme }) => theme.typography.title1.bold}
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const BannerSubTitle = styled.p`
  ${({ theme }) => theme.typography.title2.medium}
  color: ${({ theme }) => theme.semantic.label.normal};
`;
