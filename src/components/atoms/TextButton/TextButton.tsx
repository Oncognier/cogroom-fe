'use client';

import { useTheme } from '@emotion/react';

import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { TextButtonStyleProps } from './TextButton.styled';

interface TextButtonProps extends TextButtonStyleProps, InteractionStyleProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function TextButton({
  label,
  iconLeft,
  iconRight,
  color,
  size,
  isDisabled,
  interactionVariant,
  onClick,
}: TextButtonProps) {
  const theme = useTheme();

  let interactionColor;

  if (color === 'primary') {
    interactionColor = theme.semantic.primary.normal;
  } else if (color === 'assistive') {
    interactionColor = theme.semantic.label.alternative;
  }

  return (
    <S.TextButtonInteraction
      interactionVariant={interactionVariant}
      interactionColor={interactionColor}
      interactionDisabled={isDisabled}
      tabIndex={0}
    >
      <S.TextButton
        size={size}
        color={color}
        disabled={isDisabled}
        onClick={isDisabled ? undefined : onClick}
      >
        <S.Icon>{iconLeft}</S.Icon>
        {label}
        <S.Icon>{iconRight}</S.Icon>
      </S.TextButton>
    </S.TextButtonInteraction>
  );
}
