import Check from '@/assets/icons/check-bold.svg';

import * as S from './Checkbox.styled';
import type { CheckboxStyleProps } from './Checkbox.styled';

interface CheckboxProps extends CheckboxStyleProps {
  onToggle?: (checked: boolean) => void;
  required?: boolean;
  name?: string;
  tabIndex?: number;
  stopPropagation?: boolean;
  isIndeterminate?: boolean;
}

export default function Checkbox({
  size,
  isDisabled,
  isChecked,
  interactionVariant,
  onToggle,
  required = false,
  name,
  round,
  tabIndex,
  stopPropagation = false,
  isIndeterminate = false,
}: CheckboxProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }

    if (!isDisabled) {
      onToggle?.(!isChecked);
    }
  };

  return (
    <S.Checkbox
      type='button'
      size={size}
      isDisabled={isDisabled}
      isChecked={isChecked}
      interactionVariant={interactionVariant}
      onClick={handleClick}
      round={round}
      tabIndex={tabIndex}
    >
      <S.HiddenCheckbox
        type='checkbox'
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggle?.(e.target.checked)}
        disabled={isDisabled}
        name={name}
        required={required}
        ref={(input) => {
          if (input) input.indeterminate = isIndeterminate;
        }}
      />
      {(isChecked || isIndeterminate) && (
        <S.Icon
          size={size}
          interactionVariant={interactionVariant}
        >
          {isIndeterminate ? (
            <div style={{ width: '8px', height: '2px', backgroundColor: 'currentColor' }} />
          ) : (
            <Check />
          )}
        </S.Icon>
      )}
    </S.Checkbox>
  );
}
