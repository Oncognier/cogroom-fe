import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { OutlinedButtonStyleProps } from './OutlinedButton.styled';

interface OutlinedButtonProps extends OutlinedButtonStyleProps, InteractionStyleProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

export default function OutlinedButton({
  label,
  iconLeft,
  iconRight,
  color,
  size,
  disable,
  interactionVariant,
  interactionColor,
  interactiondisable,
  onClick,
}: OutlinedButtonProps) {
  return (
    <S.OutlinedButtonInteraction
      interactionVariant={interactionVariant}
      interactionColor={interactionColor}
      interactiondisable={interactiondisable}
    >
      <S.OutlinedButton
        size={size}
        color={color}
        disable={disable}
        onClick={disable ? undefined : onClick}
      >
        <S.Icon>{iconLeft}</S.Icon>
        {label}
        <S.Icon>{iconRight}</S.Icon>
      </S.OutlinedButton>
    </S.OutlinedButtonInteraction>
  );
}
