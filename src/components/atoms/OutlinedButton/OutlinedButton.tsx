'use client';

import S, { OutlinedButtonStyleProps } from './OutlinedButton.styled';

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
  isDisabled,
  onClick,
  interactionVariant,
  type = 'button',
}: OutlinedButtonProps) {
  return (
    <S.OutlinedButton
      size={size}
      color={color}
      disabled={isDisabled}
      onClick={onClick}
      interactionVariant={interactionVariant}
      type={type}
    >
      <S.Icon>{iconLeft}</S.Icon>
      {label}
      <S.Icon>{iconRight}</S.Icon>
    </S.OutlinedButton>
  );
}
