import ScriptX from '@/assets/icons/script-x.svg';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

import * as S from './page.styled';

export default function Purchase() {
  return (
    <S.PurchaseContainer>
      <S.Heading>구매 기록</S.Heading>
      <EmptyState icon={<ScriptX />} />
    </S.PurchaseContainer>
  );
}
