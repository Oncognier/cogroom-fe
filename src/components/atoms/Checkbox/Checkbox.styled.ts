'use client';

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

type CheckboxSize = 'sm' | 'md';
type CheckboxVariant = 'default' | 'round';

export interface CheckboxStyleProps {
  variant?: CheckboxVariant;
  size: CheckboxSize;
  isDisabled?: boolean;
  isChecked?: boolean;
  interactionVariant: InteractionVariant;
}

const sizeStyles: Record<CheckboxSize, SerializedStyles> = {
  md: css`
    width: 1.8rem;
    height: 1.8rem;
  `,
  sm: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
};

export const CheckboxWrapper = styled.button<CheckboxStyleProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => sizeStyles[size]};

  border-radius: ${({ variant }) => (variant === 'round' ? '100rem' : '0.3rem')};
  border: ${({ theme, isChecked }) => (isChecked ? 'transparent' : `0.15rem solid ${theme.semantic.line.normal}`)};

  background-color: ${({ theme, isChecked }) => (isChecked ? theme.semantic.primary.normal : 'transparent')};

  ${({ theme, interactionVariant, isDisabled }) =>
    getInteraction(interactionVariant, theme.semantic.label.normal, isDisabled)(theme)};

  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};

  &:focus {
    outline: none;
  }
`;

export const HiddenCheckbox = styled.input`
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

const iconSizeStyles: Record<CheckboxSize, SerializedStyles> = {
  md: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
  sm: css`
    width: 1.3rem;
    height: 1.3rem;
  `,
};

export const Icon = styled.div<CheckboxStyleProps>`
  ${({ size }) => iconSizeStyles[size]};
  color: ${({ theme }) => theme.semantic.static.white};
`;
