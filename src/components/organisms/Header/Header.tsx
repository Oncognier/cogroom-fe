import * as S from './Header.styled';
import LeftNav from './LeftNav/LeftNav';
import NavList from './NavList/NavList';
import RightNav from './RightNav/RightNav';

export default async function Header() {
  return (
    <S.Header>
      <S.BorderWrapper>
        <S.ContentWrapper>
          <LeftNav />
          <RightNav />
        </S.ContentWrapper>
      </S.BorderWrapper>

      <S.BorderWrapper>
        <S.MobileWrapper>
          <NavList />
        </S.MobileWrapper>
      </S.BorderWrapper>
    </S.Header>
  );
}
