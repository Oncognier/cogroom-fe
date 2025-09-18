import { formatCountPlus } from '@/utils/formatText';
import * as S from './MetaItem.styled';

type MetaItemProps = {
  count: number;
  icon: React.ReactNode;
  fillIcon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export default function MetaItem({
  count,
  icon,
  fillIcon,
  isActive = false,
  onClick,
  disabled = false,
}: MetaItemProps) {
  const handleClick: React.MouseEventHandler = (e) => {
    if (!onClick || disabled) return;
    e.stopPropagation();
    onClick();
  };

  return (
    <S.MetaItem
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-pressed={onClick ? isActive : undefined}
      aria-disabled={disabled || undefined}
      onClick={handleClick}
    >
      <S.MetaIcon $isActive={isActive}>{isActive ? fillIcon : icon}</S.MetaIcon>
      <S.MetaText>{formatCountPlus(count)}</S.MetaText>
    </S.MetaItem>
  );
}
