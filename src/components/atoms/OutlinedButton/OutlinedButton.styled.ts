'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import InteractionOverlay from '@/styles/InteractionOverlay.styled';

type OutlinedButtonColor = 'primary' | 'secondary' | 'assistive';
type OutlinedButtonSize = 'sm' | 'md' | 'lg';

export interface OutlinedButtonStyleProps {
  color: OutlinedButtonColor;
  size: OutlinedButtonSize;
  disable?: boolean;
}

const OutlinedButtonInteraction = styled(InteractionOverlay)`
  border-radius: ${({ theme }) => theme.radius[4]};
`;

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border-radius: ${theme.radius[4]};
  border: 1px solid ${theme.semantic.primary.normal};
  color: ${theme.semantic.primary.normal};
  padding: 0.75rem 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const sizeStyles: Record<OutlinedButtonSize, (theme: Theme) => SerializedStyles> = {
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

const colorStyles: Record<OutlinedButtonColor, (theme: Theme, disable?: boolean) => SerializedStyles> = {
  primary: (theme, disable) => css`
    border-color: ${disable ? theme.semantic.label.assistive : theme.semantic.primary.normal};
    color: ${disable ? theme.semantic.label.assistive : theme.semantic.primary.normal};
  `,
  secondary: (theme, disable) => css`
    border-color: ${disable ? theme.semantic.label.assistive : theme.semantic.interaction.inactive};
    color: ${disable ? theme.semantic.label.assistive : theme.semantic.primary.normal};
    &::after {
      background-color: ${disable ? theme.semantic.label.assistive : theme.semantic.interaction.inactive};
    }
  `,
  assistive: (theme, disable) => css`
    border-color: ${disable ? theme.semantic.label.assistive : theme.semantic.interaction.inactive};
    color: ${disable ? theme.semantic.label.assistive : theme.semantic.label.normal};
    &::after {
      background-color: ${disable ? theme.semantic.label.assistive : theme.semantic.interaction.inactive};
    }
  `,
};

const OutlinedButton = styled.button<OutlinedButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, size }) => sizeStyles[size](theme)};
  ${({ theme, color, disable }) => colorStyles[color](theme, disable)};
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
  OutlinedButtonInteraction,
  OutlinedButton,
  Icon,
};

export default S;
