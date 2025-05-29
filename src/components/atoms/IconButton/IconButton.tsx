'use client';

import S, { IconButtonStyleProps } from './IconButton.styled';

interface IconButtonProps extends IconButtonStyleProps {
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
  return (
    <S.Container>
      <S.IconButton
        size={size}
        variant={variant}
        disabled={isDisabled}
        interactionVariant={interactionVariant}
        onClick={onClick}
      >
        {children}
      </S.IconButton>
      {pushBadge && <S.PushBadge />}
    </S.Container>
  );
}
