import S, { SolidButtonStyleProps } from './SolidButton.styled';

interface SolidButtonProps extends SolidButtonStyleProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function SolidButton({
  label,
  iconLeft,
  iconRight,
  size,
  isDisabled,
  onClick,
  interactionVariant,
}: SolidButtonProps) {
  return (
    <S.SolidButton
      size={size}
      disabled={isDisabled}
      onClick={onClick}
      interactionVariant={interactionVariant}
    >
      <S.Icon>{iconLeft}</S.Icon>
      {label}
      <S.Icon>{iconRight}</S.Icon>
    </S.SolidButton>
  );
}
