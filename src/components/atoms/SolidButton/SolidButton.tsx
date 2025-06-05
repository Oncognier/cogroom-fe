'use client';

import S, { SolidButtonStyleProps } from './SolidButton.styled';

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
  isDisabled,
  onClick,
  interactionVariant,
  type = 'button',
}: SolidButtonProps) {
  return (
    <S.SolidButton
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
    </S.SolidButton>
  );
}
