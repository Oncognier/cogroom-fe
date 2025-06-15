'use client';

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import Check from '@/assets/icons/check-bold.svg';
import { getInteraction, InteractionVariant } from '@/styles/interaction';
import type { CheckState, CheckSize } from '@/types/check';

export interface CheckboxStyleProps {
  size: CheckSize;
  disabled?: boolean;
  interactionVariant: InteractionVariant;
  state: CheckState;
}

const sizeStyles: Record<CheckSize, SerializedStyles> = {
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

  border-radius: 0.3rem;
  border: ${({ theme, state }) =>
    state === 'unchecked' ? `0.15rem solid ${theme.semantic.line.normal}` : 'transparent'};

  background-color: ${({ theme, state }) => (state === 'checked' ? theme.semantic.primary.normal : 'transparent')};

  ${({ theme, interactionVariant, disabled }) =>
    getInteraction(interactionVariant, theme.semantic.label.normal, disabled)(theme)};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    pointer-events: none;
  }
`;

const iconSizeStyles: Record<CheckSize, SerializedStyles> = {
  md: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
  sm: css`
    width: 1.3rem;
    height: 1.3rem;
  `,
};

export const CheckIcon = styled(Check)<CheckboxStyleProps>`
  ${({ size }) => iconSizeStyles[size as keyof typeof iconSizeStyles]};
  color: ${({ theme }) => theme.semantic.static.white};
`;
