'use client';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

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

  ${mqMax.desktop} {
    display: flex;
  }
`;

export const BottomSheetContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-height: 80vh;
  overflow: hidden;

  background: ${({ theme }) => theme.semantic.static.white};
  border-radius: 1.2rem 1.2rem 0 0;
  border: 0.1rem solid rgba(194, 196, 200, 0.43);

  animation: ${({ isOpen }) => (isOpen ? slideUp : slideDown)} 0.3s ease-out forwards;

  ${mqMax.tablet} {
    border-radius: 1.2rem 1.2rem 0 0;
    width: 100%;
  }
`;

export const HandleBar = styled.div`
  width: 5.2rem;
  height: 0.3rem;

  background: ${({ theme }) => theme.semantic.label.assistive};
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;
  height: 6.9rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.headline1.semibold};

  color: ${({ theme }) => theme.semantic.static.black};
`;

export const MenuSection = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 1.2rem;
  padding-bottom: 4rem;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2.4rem;
`;
