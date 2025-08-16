import * as S from './ScrollWrapper.styled';

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  return (
    <S.ScrollWrapper>
      <S.ScrollContent>{children}</S.ScrollContent>
    </S.ScrollWrapper>
  );
}
