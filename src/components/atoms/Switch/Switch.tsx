import S, { SwitchStyleProps } from './Switch.styled';

interface SwitchProps extends SwitchStyleProps {
  onChange: () => void;
}

export default function Switch({ size, isActive, disable, onChange }: SwitchProps) {
  return (
    <S.Switch
      size={size}
      isActive={isActive}
      disable={disable}
      onClick={onChange}
    >
      <S.Knob
        size={size}
        isActive={isActive}
      />
    </S.Switch>
  );
}
