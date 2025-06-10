import * as S from './styled';

export default function DailyLayout({ children }: { children: React.ReactNode }) {
  return (
    // TODO: 레이아웃 추상화
    <S.DailyWrapper>
      {children}
      <S.Spacer />
    </S.DailyWrapper>
  );
}
