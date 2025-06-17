import Cogpoint from './_components/Cogpoint/Cogpoint';
import Community from './_components/Community/Community';
import Contents from './_components/Contents/Contents';
import Daily from './_components/Daily/Daily';
import Hero from './_components/Hero/Hero';
import * as S from './page.styled';

export default function Home() {
  return (
    <>
      <Hero />
      <S.ContentsWrapper>
        <Cogpoint />
      </S.ContentsWrapper>
      <S.Space />
      <Daily />
      <S.Space />
      <Contents />
      <S.Space />
      <Community />
    </>
  );
}
