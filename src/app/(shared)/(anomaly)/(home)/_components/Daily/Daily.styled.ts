'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrapper = styled.div`
  position: relative;
  height: 50rem;
`;

export const DailyImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
