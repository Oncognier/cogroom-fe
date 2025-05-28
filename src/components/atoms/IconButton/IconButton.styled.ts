'use client';

import { SerializedStyles, Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

import InteractionOverlay from '@/styles/InteractionOverlay.styled';

type IconButtonVariant = 'normal' | 'background' | 'outlined' | 'solid';

export interface IconButtonStyleProps {
  size: string;
  variant: IconButtonVariant;
}

const IconButtonInteraction = styled(InteractionOverlay)`
  border-radius: 50%;
`;

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px solid transparent;
  background-color: transparent;
  color: ${theme.semantic.label.normal};
  padding: 0.7rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${theme.semantic.label.disable};
    cursor: default;
  }
`;

const sizeStyles = (size: string) => css`
  width: ${size};
  height: ${size};
`;

const variantStyles: {
  [key in IconButtonVariant]: (theme: Theme) => SerializedStyles;
} = {
  normal: () => css``,

  background: (theme: Theme) => css`
    padding: 0.5rem;
    background-color: ${theme.semantic.fill.normal};
    border-color: ${theme.semantic.fill.normal};
  `,

  outlined: (theme: Theme) => css`
    border-color: ${theme.semantic.line.normal};
  `,

  solid: (theme: Theme) => css`
    background-color: ${theme.semantic.primary.normal};
    color: ${theme.semantic.static.white};
    border-color: ${theme.semantic.primary.normal};

    &:disabled {
      background-color: ${theme.semantic.interaction.disable};
      color: ${theme.semantic.label.disable};
      border-color: ${theme.semantic.interaction.disable};
    }
  `,
};

const IconButton = styled.button<IconButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ size }) => sizeStyles(size)};
  ${({ variant, theme }) => variantStyles[variant](theme)};
`;

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const PushBadge = styled.div`
  position: absolute;
  top: 12%;
  right: 12%;

  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.primary.normal};
`;

const S = {
  IconButtonInteraction,
  IconButton,
  Container,
  PushBadge,
};

export default S;
