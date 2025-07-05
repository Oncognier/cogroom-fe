import * as S from './TextButton.styled';
import type { TextButtonStyleProps } from './TextButton.styled';

interface TextButtonProps extends TextButtonStyleProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function TextButton({
  label,
  iconLeft,
  iconRight,
  color,
  size,
  isDisabled,
  onClick,
  interactionVariant,
  fillContainer,
  type = 'button',
  align = 'center',
}: TextButtonProps) {
  return (
    <S.TextButton
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
    </S.TextButton>
  );
}
