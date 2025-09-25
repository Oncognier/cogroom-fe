'use client';

import styled from '@emotion/styled';

export const StaticBlueLine = styled.div`
  position: absolute;
  left: 1.6rem;
  top: 5rem;
  width: 1.5rem;
  height: 100%;
  background: transparent;
  border-left: 2px solid ${({ theme }) => theme.palette.blue[90]};
  border-bottom: 2px solid ${({ theme }) => theme.palette.blue[90]};
  border-right: none;
  border-radius: 0 0 0 1.5rem;
  z-index: 1;
`;

export const BlueLineElement = styled.div`
  position: absolute;
  left: 1.6rem;
  top: 5rem;
  width: 0.15rem;
  background-color: ${({ theme }) => theme.palette.blue[90]};
  z-index: 1;
`;
