'use client';

import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { RadioStyleProps } from './Radio.styled';

interface RadioProps extends RadioStyleProps, InteractionStyleProps {
  onToggle: (checked: boolean) => void;
  required?: boolean;
  name?: string;
}

export default function Radio({
  size,
  disable,
  isChecked,
  onToggle,
  required = false,
  name,
  interactionVariant,
  interactionColor,
}: RadioProps) {
  const handleClick = () => {
    if (!disable) {
      onToggle(!isChecked);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(e.target.checked);
  };

  return (
    <S.RadioInteraction
      interactionVariant={interactionVariant}
      interactionColor={interactionColor}
      interactiondisable={disable}
      tabIndex={0}
    >
      <S.RadioContainer onClick={handleClick}>
        <S.HiddenRadio
          type='radio'
          checked={isChecked}
          onChange={handleChange}
          disabled={disable}
          name={name}
          required={required}
        />
        <S.RadioOuter
          size={size}
          disable={disable}
          isChecked={isChecked}
        >
          <S.RadioInner />
        </S.RadioOuter>
      </S.RadioContainer>
    </S.RadioInteraction>
  );
}
