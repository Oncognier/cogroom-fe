import * as S from './Header.styled';
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';

export default async function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <LeftNav />
        <RightNav />
      </S.Wrapper>
    </S.Header>
  );
}
