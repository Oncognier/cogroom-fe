'use client';

import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { IconButtonStyleProps } from './IconButton.styled';

interface IconButtonProps extends IconButtonStyleProps, InteractionStyleProps {
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
}: IconButtonProps) {
  return (
    <S.Container>
      <S.IconButtonInteraction
        interactionVariant={interactionVariant}
        interactionColor={interactionColor}
        interactiondisable={disable}
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
