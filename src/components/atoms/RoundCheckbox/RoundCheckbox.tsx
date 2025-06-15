import type { CheckState } from '@/types/check';

import * as S from './RoundCheckbox.styled';
import type { RoundCheckboxStyleProps } from './RoundCheckbox.styled';

interface RoundCheckboxProps extends RoundCheckboxStyleProps {
  state: CheckState;
  onToggle: (nextState: CheckState) => void;
}

export default function RoundCheckbox({ size, disabled, state, interactionVariant, onToggle }: RoundCheckboxProps) {
  const handleClick = () => {
    if (disabled) return;
    const nextState: CheckState = state === 'checked' ? 'unchecked' : 'checked';
    onToggle(nextState);
  };

  return (
    <S.CheckboxWrapper
      size={size}
      disabled={disabled}
      interactionVariant={interactionVariant}
      state={state}
      onClick={handleClick}
    >
      {state === 'checked' && <S.CheckIcon size={size} />}
    </S.CheckboxWrapper>
  );
}
