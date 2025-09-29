import * as S from './SolidButton.styled';
import type { SolidButtonStyleProps } from './SolidButton.styled';

interface SolidButtonProps extends SolidButtonStyleProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function SolidButton({
  label,
  iconLeft,
  iconRight,
  size,
  color,
  round,
  fillContainer,
  isDisabled,
  onClick,
  interactionVariant,
  type = 'button',
  align = 'center',
}: SolidButtonProps) {
  return (
    <S.SolidButton
      size={size}
      color={color}
      disabled={isDisabled}
      onClick={onClick}
      interactionVariant={interactionVariant}
      fillContainer={fillContainer}
      type={type}
      align={align}
      round={round}
    >
      {iconLeft && <S.Icon>{iconLeft}</S.Icon>}
      {label}
      {iconRight && <S.Icon>{iconRight}</S.Icon>}
    </S.SolidButton>
  );
}
