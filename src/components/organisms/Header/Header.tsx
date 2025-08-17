import * as S from './Header.styled';
import LeftNav from './LeftNav/LeftNav';
import NavList from './NavList/NavList';
import RightNav from './RightNav/RightNav';

export default async function Header() {
  return (
    <S.Header>
      <S.ContentWrapper>
        <LeftNav />
        <RightNav />
      </S.ContentWrapper>

      <S.MobileWrapper>
        <NavList />
      </S.MobileWrapper>
    </S.Header>
  );
}
