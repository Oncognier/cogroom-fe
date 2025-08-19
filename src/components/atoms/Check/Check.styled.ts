'use client';

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/helpers/interaction';

type CheckSize = 'nm' | 'sm';

export interface CheckStyleProps {
  size: CheckSize;
  isDisabled?: boolean;
  isChecked?: boolean;
  interactionVariant: InteractionVariant;
}

const sizeStyles: Record<CheckSize, SerializedStyles> = {
  nm: css`
    width: 3.2rem;
    height: 3.2rem;
  `,
  sm: css`
    width: 2.8rem;
    height: 2.8rem;
  `,
};

export const Check = styled.button<CheckStyleProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => sizeStyles[size]};
  border-radius: 100rem;

  ${({ theme, interactionVariant, isDisabled }) =>
    getInteraction(interactionVariant, theme.semantic.label.normal, isDisabled)(theme)};

  color: ${({ theme, isChecked }) => (isChecked ? theme.semantic.primary.normal : theme.semantic.label.assistive)};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};

  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};

  &:focus {
    outline: none;
  }
`;

export const HiddenCheck = styled.input`
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

const iconSizeStyles: Record<CheckSize, SerializedStyles> = {
  nm: css`
    width: 2.4rem;
    height: 2.4rem;
  `,
  sm: css`
    width: 2rem;
    height: 2rem;
  `,
};

export const Icon = styled.div<Pick<CheckStyleProps, 'size'>>`
  ${({ size }) => iconSizeStyles[size]};
`;
