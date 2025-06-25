import * as S from './IconButton.styled';
import type { IconButtonStyleProps } from './IconButton.styled';

interface IconButtonProps extends IconButtonStyleProps {
  type?: 'button' | 'submit' | 'reset';
  pushBadge?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  stopPropagation?: boolean;
  children: React.ReactNode;
}

export default function IconButton({
  type = 'button',
  variant,
  size,
  isDisabled,
  interactionVariant,
  pushBadge,
  onClick,
  stopPropagation = false,
  children,
}: IconButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    onClick?.();
  };

  return (
    <S.Container>
      <S.IconButton
        type={type}
        size={size}
        variant={variant}
        disabled={isDisabled}
        interactionVariant={interactionVariant}
        onClick={handleClick}
      >
        {children}
      </S.IconButton>
      {pushBadge && <S.PushBadge />}
    </S.Container>
  );
}
