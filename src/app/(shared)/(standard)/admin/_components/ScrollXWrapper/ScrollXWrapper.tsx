import * as S from './ScrollXWrapper.styled';

export default function ScrollXWrapper({ children }: { children: React.ReactNode }) {
  return (
    <S.ScrollXWrapper>
      <S.ScrollXContent>{children}</S.ScrollXContent>
    </S.ScrollXWrapper>
  );
}
