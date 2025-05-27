import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { SolidButtonStyleProps } from './SolidButton.styled';

interface SolidButtonProps extends SolidButtonStyleProps, InteractionStyleProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

export default function SolidButton({
  label,
  iconLeft,
  iconRight,
  size,
  disable,
  interactionVariant,
  interactionColor,
  interactiondisable,
  onClick,
}: SolidButtonProps) {
  return (
    <S.SolidButtonInteraction
      interactionVariant={interactionVariant}
      interactionColor={interactionColor}
      interactiondisable={interactiondisable}
    >
      <S.SolidButton
        size={size}
        disable={disable}
        onClick={disable ? undefined : onClick}
      >
        <S.Icon>{iconLeft}</S.Icon>
        {label}
        <S.Icon>{iconRight}</S.Icon>
      </S.SolidButton>
    </S.SolidButtonInteraction>
  );
}
