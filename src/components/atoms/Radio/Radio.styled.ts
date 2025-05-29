'use client';

import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';

import InteractionOverlay from '@/styles/InteractionOverlay.styled';

type RadioSize = 'sm' | 'md';

export interface RadioStyleProps {
  size: RadioSize;
  isDisabled?: boolean;
  isChecked?: boolean;
}

const RadioInteraction = styled(InteractionOverlay)`
  border-radius: 50%;
`;

const sizeStyles: Record<RadioSize, SerializedStyles> = {
  sm: css`
    height: 1.8rem;
  `,
  md: css`
    height: 2.2rem;
  `,
};

const RadioContainer = styled.div<{ isDisabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
`;

const RadioOuter = styled.div<RadioStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => sizeStyles[size]};

  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 0.1rem solid
    ${({ isChecked, theme }) => (isChecked ? theme.semantic.primary.normal : theme.semantic.line.normal)};
  background-color: ${({ isChecked, theme }) => (isChecked ? theme.semantic.primary.normal : 'transparent')};

  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
  transition: all 0.2s ease;
`;

const RadioInner = styled.div`
  height: 50%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.static.white};
`;

const HiddenRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  white-space: nowrap;
`;

const S = {
  RadioInteraction,
  RadioContainer,
  RadioOuter,
  RadioInner,
  HiddenRadio,
};

export default S;
