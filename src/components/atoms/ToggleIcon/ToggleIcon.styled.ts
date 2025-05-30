'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

export interface ToggleIconStyleProps {
  size: string;
  isActive?: boolean;
  interactionVariant: InteractionVariant;
}

const sizeStyles = (size: string) => css`
  width: ${size};
  height: ${size};
`;

const ToggleIcon = styled.button<ToggleIconStyleProps>`
  ${({ size }) => sizeStyles(size)};
  ${({ theme, interactionVariant }) => getInteraction(interactionVariant, theme.semantic.label.alternative)(theme)};

  color: ${({ theme, isActive }) => (isActive ? theme.semantic.primary.normal : theme.semantic.label.assistive)};
  padding: 0.4rem;
  border-radius: 50%;

  &:focus {
    outline: none;
  }
`;

const S = {
  ToggleIcon,
};

export default S;
