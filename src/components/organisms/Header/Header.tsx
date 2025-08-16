import * as S from './Header.styled';
import LeftNav from './LeftNav/LeftNav';
import NavList from './NavList/NavList';
import RightNav from './RightNav/RightNav';

export default async function Header() {
  return (
    <S.Header>
      <S.HeaderBar>
        <S.HeaderInner>
          <LeftNav />
          <RightNav />
        </S.HeaderInner>
      </S.HeaderBar>

      <S.HeaderBar>
        <S.SmallScreenNav>
          <NavList />
        </S.SmallScreenNav>
      </S.HeaderBar>
    </S.Header>
  );
}
