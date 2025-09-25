import * as S from './MyPageScrollXWrapper.styled';

export default function MyPageScrollXWrapper({ children }: { children: React.ReactNode }) {
  return (
    <S.MyPageScrollXWrapper>
      <S.MyPageScrollXContent>{children}</S.MyPageScrollXContent>
    </S.MyPageScrollXWrapper>
  );
}
