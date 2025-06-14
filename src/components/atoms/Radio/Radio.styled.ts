'use client';

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

type RadioSize = 'sm' | 'md';

export interface RadioStyleProps {
  size: RadioSize;
  isDisabled?: boolean;
  isChecked?: boolean;
  interactionVariant: InteractionVariant;
}

const sizeStyles: Record<RadioSize, SerializedStyles> = {
  sm: css`
    height: 1.8rem;
  `,
  md: css`
    height: 2.2rem;
  `,
};

export const RadioContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const RadioOuter = styled.button<RadioStyleProps>`
  ${({ size }) => sizeStyles[size]};
  ${({ theme, interactionVariant, isDisabled }) =>
    getInteraction(interactionVariant, theme.semantic.label.normal, isDisabled)(theme)};

  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 0.1rem solid
    ${({ isChecked, theme }) => (isChecked ? theme.semantic.primary.normal : theme.semantic.line.normal)};
  background-color: ${({ isChecked, theme }) => (isChecked ? theme.semantic.primary.normal : 'transparent')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};

  transition: all 0.2s ease;

  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};

  &:focus {
    outline: none;
  }
`;

export const RadioInner = styled.div`
  height: 50%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.static.white};
`;

export const HiddenRadio = styled.input`
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
