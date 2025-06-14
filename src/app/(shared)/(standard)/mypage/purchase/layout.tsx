import * as S from './layout.styled';

export default function PurchaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.PurchaseLayout>
      <S.Heading>구매 기록</S.Heading>
      {children}
    </S.PurchaseLayout>
  );
}
