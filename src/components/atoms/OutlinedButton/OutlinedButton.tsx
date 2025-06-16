import * as S from './OutlinedButton.styled';
import type { OutlinedButtonStyleProps } from './OutlinedButton.styled';

interface OutlinedButtonProps extends OutlinedButtonStyleProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function OutlinedButton({
  label,
  iconLeft,
  iconRight,
  color,
  size,
  fillContainer,
  isDisabled,
  onClick,
  interactionVariant,
  type = 'button',
}: OutlinedButtonProps) {
  return (
    <S.OutlinedButton
      size={size}
      color={color}
      fillContainer={fillContainer}
      hasIcon={!!iconLeft || !!iconRight}
      disabled={isDisabled}
      onClick={onClick}
      interactionVariant={interactionVariant}
      type={type}
    >
      {iconLeft && <S.Icon>{iconLeft}</S.Icon>}
      {label}
      {iconRight && <S.Icon>{iconRight}</S.Icon>}
    </S.OutlinedButton>
  );
}
