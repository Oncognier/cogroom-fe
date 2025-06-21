import { DEFAULT_HERO_WAVY } from '@/constants/image';

import * as S from './Hero.styled';
import HeroButton from './HeroButton';

export default function Hero() {
  return (
    <S.HeroWrapper>
      <S.HeroImage
        src={DEFAULT_HERO_WAVY}
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
        <HeroButton />
      </S.TextWrapper>
    </S.HeroWrapper>
  );
}
