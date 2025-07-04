'use client';

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

type SwitchSize = 'sm' | 'md';

export interface SwitchStyleProps {
  size: SwitchSize;
  isActive?: boolean;
  isDisabled?: boolean;
}

const knobTranslateX = {
  sm: '1.3rem', // (3.9 - 0.8 - 2.6) ≈ 0.5
  md: '2rem', // (5.2 - 0.8 - 3.2) ≈ 1.2
};

const sizeStyles: Record<SwitchSize, SerializedStyles> = {
  sm: css`
    width: 3.9rem;
    height: 2.6rem;
  `,
  md: css`
    width: 5.2rem;
    height: 3.2rem;
  `,
};

export const Switch = styled.button<SwitchStyleProps>`
  ${({ size }) => sizeStyles[size]};

  display: flex;
  align-items: center;

  padding: 0.4rem;
  border-radius: 100rem;
  background-color: ${({ isActive, theme }) => (isActive ? theme.semantic.primary.normal : theme.semantic.fill.strong)};

  transition: background-color 0.3s;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.43 : 1)};

  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};

  &:focus {
    outline: none;
  }
`;

export const Knob = styled.div<{ isActive?: boolean; size: SwitchSize }>`
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.semantic.static.white};
  border-radius: 50%;

  transform: ${({ isActive, size }) => (isActive ? `translateX(${knobTranslateX[size]})` : 'translateX(0)')};
  transition: transform 0.2s;
`;
