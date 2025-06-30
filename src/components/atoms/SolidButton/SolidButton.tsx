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
  fillContainer,
  isDisabled,
  onClick,
  interactionVariant,
  type = 'button',
  align = 'center',
}: SolidButtonProps) {
  return (
    <S.StyledSolidButton
      size={size}
      color={color}
      disabled={isDisabled}
      onClick={onClick}
      interactionVariant={interactionVariant}
      fillContainer={fillContainer}
      type={type}
      align={align}
    >
      {iconLeft && <S.Icon>{iconLeft}</S.Icon>}
      {label}
      {iconRight && <S.Icon>{iconRight}</S.Icon>}
    </S.StyledSolidButton>
  );
}
