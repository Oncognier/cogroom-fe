import { formatCountPlus } from '@/utils/formatText';

import * as S from './MetaItem.styled';

type MetaItemProps = {
  count: number;
  icon: React.ReactNode;
  fillIcon: React.ReactNode;
  isActive?: boolean;
};

export default function MetaItem({ count, icon, fillIcon, isActive = false }: MetaItemProps) {
  return (
    <S.MetaItem>
      <S.MetaIcon $isActive={isActive}>{isActive ? fillIcon : icon}</S.MetaIcon>
      <S.MetaText>{formatCountPlus(count)}</S.MetaText>
    </S.MetaItem>
  );
}
