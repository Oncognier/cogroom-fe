'use client';

import { useTheme } from '@emotion/react';

import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { IconButtonStyleProps } from './IconButton.styled';

interface IconButtonProps extends IconButtonStyleProps, InteractionStyleProps {
  pushBadge?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function IconButton({
  variant,
  size,
  isDisabled,
  interactionVariant,
  pushBadge,
  onClick,
  children,
}: IconButtonProps) {
  const theme = useTheme();

  return (
    <S.Container>
      <S.IconButtonInteraction
        interactionVariant={interactionVariant}
        interactionColor={theme.semantic.label.alternative}
        interactionDisabled={isDisabled}
        tabIndex={0}
      >
        <S.IconButton
          size={size}
          variant={variant}
          disabled={isDisabled}
          onClick={onClick}
        >
          {children}
        </S.IconButton>
      </S.IconButtonInteraction>
      {pushBadge && <S.PushBadge />}
    </S.Container>
  );
}
