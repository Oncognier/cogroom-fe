import Cogpoint from './_components/Cogpoint/Cogpoint';
import Community from './_components/Community/Community';
import Content from './_components/Content/Content';
import Daily from './_components/Daily/Daily';
import Hero from './_components/Hero/Hero';
import * as S from './page.styled';
import ActionBanner from './_components/ActionBanner/ActionBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Cogpoint />
      <S.Space />
      <Daily />
      <S.Space />
      <Content />
      <S.Space />
      <Community />
      <ActionBanner />
    </>
  );
}
