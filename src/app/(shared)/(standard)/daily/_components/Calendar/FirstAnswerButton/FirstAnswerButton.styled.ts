'use client';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction } from '@/styles/helpers/interaction';

const gradientSlide = keyframes`
  0% {
    background-position: 200% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 100%;

  padding: 1.1rem 2.3rem;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.semantic.primary.normal};
  background-color: ${({ theme }) => theme.semantic.static.white};
  color: ${({ theme }) => theme.semantic.primary.normal};
  ${({ theme }) => theme.typography.body2.semibold};
  border-bottom: 6px solid ${({ theme }) => theme.semantic.primary.normal};

  background-image: linear-gradient(90deg, #ffffff 0%, #e4f8ff 30%, #ffffff 60%, #e4f8ff 90%, #ffffff 100%);
  background-size: 200% 100%;
  animation: ${gradientSlide} 2.5s ease-in-out infinite;

  ${({ theme }) => getInteraction('normal', theme.semantic.label.normal, false)(theme)};

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.semantic.label.assistive};
    color: ${({ theme }) => theme.semantic.label.assistive};
    cursor: default;
    pointer-events: none;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.2em;
  height: 1.2em;
`;
