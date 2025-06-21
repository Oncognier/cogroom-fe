import { DEFAULT_DAILY_WATERDROP } from '@/constants/image';

import * as S from './Daily.styled';
import Section from '../Section/Section';

export default function Daily() {
  return (
    <Section
      title='데일리'
      subtitle='단순한 학습이 아닌 나를 알아가고 이해하는 여정을 제공합니다'
    >
      <S.Wrapper>
        <S.DailyImage
          src={DEFAULT_DAILY_WATERDROP}
          alt='daily'
          fill
        />
      </S.Wrapper>
    </Section>
  );
}
