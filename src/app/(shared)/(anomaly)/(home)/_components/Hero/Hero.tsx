import HeroClient from './Hero.client';
import * as S from './Hero.styled';

export default function Hero() {
  return (
    <S.HeroWrapper>
      <S.HeroImage
        src='/wavy.gif'
        alt=''
        role='presentation'
        fill
        priority
      />
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>나에게 딱 맞는 맞춤 학습</S.SubTitle>
          <S.Title>모든이의 내적 성장을 돕습니다</S.Title>
        </S.TitleWrapper>
        <S.SubTitle>모두가 생각하고 성장하는 공간, 코그룸</S.SubTitle>
        <HeroClient />
      </S.TextWrapper>
    </S.HeroWrapper>
  );
}
