import Check from '@/assets/icons/check-bold.svg';

import * as S from './Checkbox.styled';
import type { CheckboxStyleProps } from './Checkbox.styled';

interface CheckboxProps extends CheckboxStyleProps {
  onToggle: (checked: boolean) => void;
  required?: boolean;
  name?: string;
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
}: CheckboxProps) {
  const handleClick = () => {
    if (!isDisabled) {
      onToggle(!isChecked);
    }
  };

  return (
    <S.Checkbox
      size={size}
      isDisabled={isDisabled}
      isChecked={isChecked}
      interactionVariant={interactionVariant}
      onClick={handleClick}
      round={round}
    >
      <S.HiddenCheckbox
        type='checkbox'
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggle(e.target.checked)}
        disabled={isDisabled}
        name={name}
        required={required}
      />
      {isChecked && (
        <S.Icon
          size={size}
          interactionVariant={interactionVariant}
        >
          <Check />
        </S.Icon>
      )}
    </S.Checkbox>
  );
}
