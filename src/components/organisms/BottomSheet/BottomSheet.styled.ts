'use client';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';
import { theme } from '@/styles/theme';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const BottomSheetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(23, 23, 25, 0.3);

  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  /* 데스크톱에서는 숨기기 */
  ${mqMax.desktop} {
    display: flex;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const BottomSheetContainer = styled.div<{ isOpen: boolean }>`
  background: #ffffff;
  border-radius: 12px 12px 0 0;
  border: 1px solid rgba(194, 196, 200, 0.43);
  width: 100%;
  max-height: 80vh;
  overflow: hidden;

  animation: ${({ isOpen }) => (isOpen ? slideUp : slideDown)} 0.3s ease-out forwards;

  ${mqMax.tablet} {
    border-radius: 12px 12px 0 0;
    width: 100%;
    margin: 0;
  }
`;

export const HandleBar = styled.div`
  width: 52px;
  height: 3px;
  background: #d9d9d9;
  border-radius: 12px;
  /* margin: 0px auto; */
`;

export const TitleSection = styled.div`
  width: 100%;
  padding: 0px;
  height: 69px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: #000000;
`;

export const MenuSection = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12px;
  padding-bottom: 40px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;
