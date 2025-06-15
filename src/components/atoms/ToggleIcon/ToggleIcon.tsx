import * as S from './ToggleIcon.styled';
import type { ToggleIconStyleProps } from './ToggleIcon.styled';

interface ToggleIconProps extends ToggleIconStyleProps {
  onToggle: (checked: boolean) => void;
  children: React.ReactNode;
}

export default function ToggleIcon({ size, isActive, onToggle, interactionVariant, children }: ToggleIconProps) {
  const handleClick = () => {
    onToggle(!isActive);
  };

  return (
    <S.ToggleIcon
      size={size}
      isActive={isActive}
      interactionVariant={interactionVariant}
      onClick={handleClick}
    >
      {children}
    </S.ToggleIcon>
  );
}
