'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { brandColors } from '@/styles/color';
import { getInteraction, InteractionVariant } from '@/styles/helpers/interaction';

type BrandColors = keyof Pick<typeof brandColors, 'kakao' | 'naver'>;

type SolidButtonColor = 'primary' | 'assistive' | BrandColors;
type SolidButtonSize = 'sm' | 'md' | 'lg';
type SolidButtonAlign = 'center' | 'space-between';

export interface SolidButtonStyleProps {
  color?: SolidButtonColor;
  size: SolidButtonSize;
  interactionVariant: InteractionVariant;
  fillContainer?: boolean;
  align?: SolidButtonAlign;
}

const commonStyles = (theme: Theme, fillContainer?: boolean, align?: SolidButtonAlign) => css`
  display: flex;
  align-items: center;
  justify-content: ${align};
  gap: 4px;

  width: ${fillContainer ? '100%' : 'auto'};
  border: none;
  border-radius: 1.2rem;
  background-color: ${theme.semantic.primary.normal};
  color: ${theme.semantic.static.white};
  padding: 1.2rem 2.4rem;

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
  assistive: (theme) => css`
    background-color: ${theme.semantic.background.elevated.normal};
    color: ${theme.semantic.background.elevated.alternative};
  `,
  kakao: (theme) => css`
    background-color: ${theme.brandColors.kakao};
    color: ${theme.semantic.label.normal};
  `,
  naver: (theme) => css`
    background-color: ${theme.brandColors.naver};
    color: ${theme.semantic.static.white};
  `,
};

export const SolidButton = styled.button<SolidButtonStyleProps>`
  ${({ theme, fillContainer, align }) => commonStyles(theme, fillContainer, align)};
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
