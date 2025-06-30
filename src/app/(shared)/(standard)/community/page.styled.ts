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
  }
`;
