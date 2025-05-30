'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { brandColors } from '@/styles/color';
import { getInteraction, InteractionVariant } from '@/styles/interaction';

type BrandColors = keyof typeof brandColors;

type SolidButtonColor = 'primary' | BrandColors;
type SolidButtonSize = 'sm' | 'md' | 'lg' | 'fillContainer';

export interface SolidButtonStyleProps {
  color?: SolidButtonColor;
  size: SolidButtonSize;
  interactionVariant: InteractionVariant;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: none;
  border-radius: ${theme.radius[12]};
  background-color: ${theme.semantic.primary.normal};
  color: ${theme.semantic.static.white};
  padding: ${theme.spacing[12]} ${theme.spacing[24]};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${theme.semantic.interaction.disable};
    color: ${theme.semantic.label.assistive};
    cursor: default;
    pointer-events: none;
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
  fillContainer: (theme) => css`
    ${theme.typography.body1.semibold};
    width: 100%;
  `,
};

const colorStyles: Record<SolidButtonColor, (theme: Theme) => SerializedStyles> = {
  primary: (theme) => css`
    background-color: ${theme.semantic.primary.normal};
    color: ${theme.semantic.static.white};
  `,
  kakao: (theme) => css`
    background-color: ${theme.brandColors.kakao};
    color: ${theme.semantic.label.normal};
  `,
};

const getInteractionColor = (theme: Theme) => {
  return theme.semantic.label.normal;
};

const SolidButton = styled.button<SolidButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, size }) => sizeStyles[size](theme)};
  ${({ theme, color }) => (color ? colorStyles[color](theme) : colorStyles.primary(theme))};
  ${({ theme, interactionVariant, disabled }) =>
    getInteraction(interactionVariant, getInteractionColor(theme), disabled)(theme)};
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
  SolidButton,
  Icon,
};

export default S;
