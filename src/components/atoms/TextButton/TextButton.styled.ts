'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import InteractionOverlay from '@/styles/InteractionOverlay.styled';

type TextButtonColor = 'primary' | 'assistive';
type TextButtonSize = 'sm' | 'md' | 'lg';

export interface TextButtonStyleProps {
  color: TextButtonColor;
  size: TextButtonSize;
  disable: boolean;
}

const TextButtonInteraction = styled(InteractionOverlay)`
  border-radius: ${({ theme }) => theme.radius[4]};
`;

const baseButtonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 4px;

  border: none;
  border-radius: ${theme.radius[4]};
  background-color: transparent;
  padding: 0.3rem 0.4rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const colorStyles: Record<TextButtonColor, (theme: Theme, disable?: boolean) => SerializedStyles> = {
  primary: (theme, disable) => css`
    color: ${disable ? theme.semantic.label.assistive : theme.semantic.primary.normal};
  `,
  assistive: (theme, disable) => css`
    color: ${disable ? theme.semantic.label.assistive : theme.semantic.label.alternative};
  `,
};

const sizeStyles: Record<TextButtonSize, (theme: Theme) => SerializedStyles> = {
  sm: (theme) => css`
    ${theme.typography.label2.semibold};
  `,
  md: (theme) => css`
    ${theme.typography.body2.semibold};
  `,
  lg: (theme) => css`
    ${theme.typography.body1.semibold};
  `,
};

const TextButton = styled.div<TextButtonStyleProps>`
  ${({ theme }) => baseButtonStyles(theme)};
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
  TextButtonInteraction,
  TextButton,
  Icon,
};

export default S;
