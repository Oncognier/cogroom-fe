import * as S from './ActionBanner.styled';

export default function ActionBanner() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextWrapper>지금 나만의 코그룸을 만들어보세요</S.TextWrapper>
        <S.ButtonWrapper>코그룸 시작하기</S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
