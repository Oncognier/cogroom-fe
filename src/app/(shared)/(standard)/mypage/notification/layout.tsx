import * as S from './layout.styled';

export default function NotificationLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.NotificationLayout>
      <S.TextWrapper>
        <S.Heading>푸시 및 카톡 알림</S.Heading>
        <S.Description>
          알림을 켜 두면 코그룸과 함께 더욱 성장할 수 있어요. (*알림 기능은 아직 지원하지 않아요!)
        </S.Description>
      </S.TextWrapper>
      {children}
    </S.NotificationLayout>
  );
}
