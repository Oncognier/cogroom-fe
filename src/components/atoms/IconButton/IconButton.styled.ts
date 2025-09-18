'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/helpers/interaction';

type IconButtonVariant = 'normal' | 'background' | 'outlined' | 'solid';

export interface IconButtonStyleProps {
  size: string;
  variant: IconButtonVariant;
  interactionVariant: InteractionVariant;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px solid transparent;
  background-color: transparent;
  color: ${theme.semantic.label.normal};
  padding: 1rem;

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

const variantStyles: Record<IconButtonVariant, (theme: Theme) => SerializedStyles> = {
  normal: () => css``,

  background: (theme) => css`
    padding: 0.5rem;
    background-color: ${theme.semantic.fill.normal};
    border-color: ${theme.semantic.fill.normal};
  `,

  outlined: (theme) => css`
    background-color: ${theme.palette.common[0]};
    border-color: ${theme.semantic.line.normal};
    color: ${theme.semantic.label.alternative};
  `,

  solid: (theme) => css`
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

export const IconButton = styled.button<IconButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ size }) => sizeStyles(size)};
  ${({ variant, theme }) => variantStyles[variant](theme)};
  ${({ theme, interactionVariant, disabled }) =>
    getInteraction(interactionVariant, theme.semantic.label.alternative, disabled)(theme)};
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

export const PushBadge = styled.div`
  position: absolute;
  top: 12%;
  right: 12%;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.primary.normal};
`;
