import CheckIcon from '@/assets/icons/check-bold.svg';

import * as S from './Check.styled';
import type { CheckStyleProps } from './Check.styled';

interface CheckProps extends CheckStyleProps {
  onToggle: (checked: boolean) => void;
  required?: boolean;
  name?: string;
}

export default function Check({
  size,
  isDisabled,
  isChecked,
  onToggle,
  required = false,
  name,
  interactionVariant,
}: CheckProps) {
  const handleClick = () => {
    if (!isDisabled) {
      onToggle(!isChecked);
    }
  };

  return (
    <S.Check
      size={size}
      isDisabled={isDisabled}
      isChecked={isChecked}
      interactionVariant={interactionVariant}
      onClick={handleClick}
    >
      <S.HiddenCheck
        type='checkbox'
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggle(e.target.checked)}
        disabled={isDisabled}
        name={name}
        required={required}
      />
      <S.Icon size={size}>
        <CheckIcon />
      </S.Icon>
    </S.Check>
  );
}
