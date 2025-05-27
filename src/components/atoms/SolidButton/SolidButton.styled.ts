'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import InteractionOverlay from '@/styles/InteractionOverlay.styled';

type SolidButtonSize = 'sm' | 'md' | 'lg';

export interface SolidButtonStyleProps {
  size: SolidButtonSize;
  disable?: boolean;
}

const SolidButtonInteraction = styled(InteractionOverlay)`
  border-radius: ${({ theme }) => theme.radius[4]};
`;

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: none;
  border-radius: ${theme.radius[4]};
  background-color: ${theme.semantic.primary.normal};
  color: ${theme.semantic.static.white};
  padding: 0.75rem 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const sizeStyles: Record<SolidButtonSize, (theme: Theme) => SerializedStyles> = {
  sm: (theme) => css`
    ${theme.typography.label2.semibold}
  `,
  md: (theme) => css`
    ${theme.typography.body2.semibold}
  `,
  lg: (theme) => css`
    ${theme.typography.body1.semibold}
  `,
};

const colorStyles: (theme: Theme, disable?: boolean) => SerializedStyles = (theme, disable) => css`
  background-color: ${disable ? theme.semantic.interaction.disable : theme.semantic.primary.normal};
  color: ${disable ? theme.semantic.label.assistive : theme.semantic.static.white};
`;

const SolidButton = styled.button<SolidButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, size }) => sizeStyles[size](theme)};
  ${({ theme, disable }) => colorStyles(theme, disable)};
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

const S = {
  SolidButtonInteraction,
  SolidButton,
  Icon,
};

export default S;
