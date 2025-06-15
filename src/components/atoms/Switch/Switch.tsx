import * as S from './Switch.styled';
import type { SwitchStyleProps } from './Switch.styled';

interface SwitchProps extends SwitchStyleProps {
  onChange: () => void;
}

export default function Switch({ size, isActive, isDisabled, onChange }: SwitchProps) {
  return (
    <S.Switch
      size={size}
      isActive={isActive}
      isDisabled={isDisabled}
      onClick={onChange}
    >
      <S.Knob
        size={size}
        isActive={isActive}
      />
    </S.Switch>
  );
}
