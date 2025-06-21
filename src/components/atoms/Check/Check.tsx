import * as S from './Check.styled';
import type { CheckboxStyleProps } from './Check.styled';
import Check from '@/assets/icons/check-bold.svg';

interface CheckboxProps extends CheckboxStyleProps {
  onToggle: (checked: boolean) => void;
  required?: boolean;
  name?: string;
}

export default function Checkbox({
  size,
  isDisabled,
  isChecked,
  onToggle,
  required = false,
  name,
  interactionVariant,
}: CheckboxProps) {
  const handleClick = () => {
    if (!isDisabled) {
      onToggle(!isChecked);
    }
  };

  return (
    <S.CheckboxWrapper
      size={size}
      isDisabled={isDisabled}
      isChecked={isChecked}
      interactionVariant={interactionVariant}
      onClick={handleClick}
    >
      <S.HiddenCheckbox
        type='checkbox'
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggle(e.target.checked)}
        disabled={isDisabled}
        name={name}
        required={required}
      />
      <S.Icon size={size}>
        <Check />
      </S.Icon>
    </S.CheckboxWrapper>
  );
}
