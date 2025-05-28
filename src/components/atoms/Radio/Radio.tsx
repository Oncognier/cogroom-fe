'use client';

import { useTheme } from '@emotion/react';

import { InteractionStyleProps } from '@/styles/InteractionOverlay.styled';

import S, { RadioStyleProps } from './Radio.styled';

interface RadioProps extends RadioStyleProps, InteractionStyleProps {
  onToggle: (checked: boolean) => void;
  required?: boolean;
  name?: string;
}

export default function Radio({
  size,
  isDisabled,
  isChecked,
  onToggle,
  required = false,
  name,
  interactionVariant,
}: RadioProps) {
  const theme = useTheme();

  const handleClick = () => {
    if (!isDisabled) {
      onToggle(!isChecked);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(e.target.checked);
  };

  return (
    <S.RadioInteraction
      interactionVariant={interactionVariant}
      interactionColor={theme.semantic.label.normal}
      interactionDisabled={isDisabled}
      tabIndex={0}
    >
      <S.RadioContainer
        isDisabled={isDisabled}
        onClick={handleClick}
      >
        <S.HiddenRadio
          type='radio'
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          name={name}
          required={required}
        />
        <S.RadioOuter
          size={size}
          isDisabled={isDisabled}
          isChecked={isChecked}
        >
          <S.RadioInner />
        </S.RadioOuter>
      </S.RadioContainer>
    </S.RadioInteraction>
  );
}
