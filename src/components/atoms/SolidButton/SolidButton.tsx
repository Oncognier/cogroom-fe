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
}: SolidButtonProps) {
  return (
    <S.StyledSolidButton
      size={size}
      color={color}
      fillContainer={fillContainer}
      disabled={isDisabled}
      onClick={onClick}
      interactionVariant={interactionVariant}
      fillContainer={fillContainer}
      type={type}
    >
      <S.Icon>{iconLeft}</S.Icon>
      {label}
      <S.Icon>{iconRight}</S.Icon>
    </S.StyledSolidButton>
  );
}
