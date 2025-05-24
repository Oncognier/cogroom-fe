'use client';

import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { IconButtonStyleProps } from './IconButton.styled';

interface IconButton extends IconButtonStyleProps, InteractionStyleProps {
  pushBadge?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function IconButton({
  variant,
  size,
  disable,
  interactionVariant,
  interactionColor,
  pushBadge,
  onClick,
  children,
}: IconButton) {
  return (
    <S.Container>
      <S.IconButtonInteraction
        interactionVariant={interactionVariant}
        interactionColor={interactionColor}
        tabIndex={0}
      >
        <S.IconButton
          size={size}
          variant={variant}
          disable={disable}
          onClick={onClick}
        >
          {children}
        </S.IconButton>
      </S.IconButtonInteraction>
      {pushBadge && <S.PushBadge />}
    </S.Container>
  );
}
