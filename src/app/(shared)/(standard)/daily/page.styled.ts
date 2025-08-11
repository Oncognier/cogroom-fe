'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

export const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const BannerWrapper = styled.div`
  max-width: 798px;
  width: 100%;
`;

export const BannerImage = styled(Image)`
  width: 100%;
  height: auto;
  cursor: pointer;
  display: block;
`;
