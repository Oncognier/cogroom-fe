'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { brandColors } from '@/styles/color';
import { getInteraction, InteractionVariant } from '@/styles/interaction';

type BrandColors = keyof typeof brandColors;

type SolidButtonColor = 'primary' | BrandColors;
type SolidButtonSize = 'sm' | 'md' | 'lg';

export interface SolidButtonStyleProps {
  color?: SolidButtonColor;
  size: SolidButtonSize;
  fillContainer?: boolean;
  interactionVariant: InteractionVariant;
  fillContainer?: boolean;
  hasIcon?: boolean;
}

const commonStyles = (theme: Theme, fillContainer?: boolean, hasIcon?: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: ${fillContainer && hasIcon ? 'space-between' : 'center'};
  gap: 4px;

  width: ${fillContainer ? '100%' : 'auto'};
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

export const StyledSolidButton = styled.button<SolidButtonStyleProps>`
  ${({ theme, fillContainer, hasIcon }) => commonStyles(theme, fillContainer, hasIcon)};
  ${({ theme, size }) => sizeStyles[size](theme)};
  ${({ theme, color }) => (color ? colorStyles[color](theme) : colorStyles.primary(theme))};
  ${({ theme, interactionVariant, disabled }) =>
    getInteraction(interactionVariant, theme.semantic.label.normal, disabled)(theme)};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 1.13em;
    height: 1.13em;
  }
`;
