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
  align = 'space-between',
}: OutlinedButtonProps) {
  return (
    <S.OutlinedButton
      size={size}
      color={color}
      fillContainer={fillContainer}
      disabled={isDisabled}
      onClick={onClick}
      interactionVariant={interactionVariant}
      type={type}
      align={align}
    >
      {iconLeft && <S.Icon>{iconLeft}</S.Icon>}
      {label}
      {iconRight && <S.Icon>{iconRight}</S.Icon>}
    </S.OutlinedButton>
  );
}
