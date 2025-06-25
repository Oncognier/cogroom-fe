import Check from '@/assets/icons/check-bold.svg';

import * as S from './Checkbox.styled';
import type { CheckboxStyleProps } from './Checkbox.styled';

interface CheckboxProps extends CheckboxStyleProps {
  onToggle: (checked: boolean) => void;
  required?: boolean;
  name?: string;
  tabIndex?: number;
  stopPropagation?: boolean;
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
<<<<<<< HEAD
  tabIndex,
=======
  stopPropagation = false,
>>>>>>> af06c25 (feat: UserListRow 클릭 이벤트 추가)
}: CheckboxProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }

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
      tabIndex={tabIndex}
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
