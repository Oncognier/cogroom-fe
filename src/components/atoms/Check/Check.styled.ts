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
    width: 3.2rem;
    height: 3.2rem;
  `,
  sm: css`
    width: 2.8rem;
    height: 2.8rem;
  `,
};

export const CheckboxWrapper = styled.button<CheckboxStyleProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => sizeStyles[size]};
  border-radius: 100rem;

  ${({ theme, interactionVariant, disabled }) =>
    getInteraction(interactionVariant, theme.semantic.label.normal, disabled)(theme)};

  color: ${({ theme, state }) =>
    state === 'checked' ? theme.semantic.primary.normal : theme.semantic.label.assistive};
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
    width: 2.4rem;
    height: 2.4rem;
  `,
  sm: css`
    width: 2rem;
    height: 2rem;
  `,
};

export const CheckIcon = styled(Check)<CheckboxStyleProps>`
  ${({ size }) => iconSizeStyles[size as keyof typeof iconSizeStyles]};
`;
