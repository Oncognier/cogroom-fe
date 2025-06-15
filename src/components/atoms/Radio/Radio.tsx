import * as S from './Radio.styled';
import type { RadioStyleProps } from './Radio.styled';

interface RadioProps extends RadioStyleProps {
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
  const handleClick = () => {
    if (!isDisabled) {
      onToggle(!isChecked);
    }
  };

  return (
    <S.RadioContainer onClick={handleClick}>
      <S.HiddenRadio
        type='radio'
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggle(e.target.checked)}
        disabled={isDisabled}
        name={name}
        required={required}
      />
      <S.RadioOuter
        size={size}
        isDisabled={isDisabled}
        isChecked={isChecked}
        interactionVariant={interactionVariant}
      >
        <S.RadioInner />
      </S.RadioOuter>
    </S.RadioContainer>
  );
}
