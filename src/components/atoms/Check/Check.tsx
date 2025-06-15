import type { CheckState } from '@/types/check';

import * as S from './Check.styled';
import type { CheckboxStyleProps } from './Check.styled';

interface CheckboxProps extends CheckboxStyleProps {
  state: CheckState;
  onToggle: (nextState: CheckState) => void;
}

export default function Checkbox({ size, disabled, state, interactionVariant, onToggle }: CheckboxProps) {
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
      <S.CheckIcon size={size} />
    </S.CheckboxWrapper>
  );
}
