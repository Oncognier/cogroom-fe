'use client';

import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { TextButtonStyleProps } from './TextButton.styled';

interface TextButtonProps extends TextButtonStyleProps, InteractionStyleProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

export default function TextButton({
  label,
  iconLeft,
  iconRight,
  color,
  size,
  disable,
  interactionVariant,
  interactionColor,
  onClick,
}: TextButtonProps) {
  return (
    <S.TextButtonInteraction
      interactionVariant={interactionVariant}
      interactionColor={interactionColor}
      interactiondisable={disable}
      tabIndex={0}
    >
      <S.TextButton
        size={size}
        color={color}
        disable={disable}
        onClick={disable ? undefined : onClick}
      >
        <S.Icon>{iconLeft}</S.Icon>
        {label}
        <S.Icon>{iconRight}</S.Icon>
      </S.TextButton>
    </S.TextButtonInteraction>
  );
}
