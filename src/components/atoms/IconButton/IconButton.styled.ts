'use client';

import { SerializedStyles, Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

import InteractionOverlay from '@/styles/InteractionOverlay.styled';

type IconButtonVariant = 'normal' | 'background' | 'outlined' | 'solid';

export interface IconButtonStyleProps {
  size: string;
  variant: IconButtonVariant;
  disable?: boolean;
}

const IconButtonInteraction = styled(InteractionOverlay)`
  border-radius: 50%;
`;

const commonStyles = (theme: Theme, disable?: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px solid transparent;
  background-color: transparent;
  color: ${disable ? theme.semantic.label.disable : theme.semantic.label.normal};
  padding: 0.7rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const sizeStyles = (size: string) => css`
  width: ${size};
  height: ${size};
`;

const variantStyles: {
  [key in IconButtonVariant]: (theme: Theme, disable?: boolean) => SerializedStyles;
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
  solid: (theme: Theme, disable?: boolean) => css`
    background-color: ${disable ? theme.semantic.interaction.disable : theme.semantic.primary.normal};
    color: ${disable ? theme.semantic.label.disable : theme.semantic.static.white};
    border-color: ${disable ? theme.semantic.interaction.disable : theme.semantic.primary.normal};
  `,
};

const IconButton = styled.button<IconButtonStyleProps>`
  ${({ theme, disable }) => commonStyles(theme, disable)}
  ${({ size }) => sizeStyles(size)}
  ${({ variant, theme, disable }) => variantStyles[variant](theme, disable)}
`;

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const PushBadge = styled.div`
  position: absolute;
  top: 8%;
  right: 8%;

  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.semantic.primary.normal};
`;

const S = {
  IconButtonInteraction,
  IconButton,
  Container,
  PushBadge,
};

export default S;
