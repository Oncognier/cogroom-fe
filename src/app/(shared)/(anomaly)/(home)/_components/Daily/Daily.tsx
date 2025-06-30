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
          quality={100}
        />
        <S.ContentWrapper>
          <S.TitleWrapper>
            <S.Title>하루 30초, 한 걸음 나아가기</S.Title>
            <S.SubTitle>쉽고 부담없는 데일리 질문으로 일상에서 사유를 습관화합니다</S.SubTitle>
          </S.TitleWrapper>

          <S.QuestionsWrapper>
            <S.Question>지금 드는 감정은...</S.Question>
            <S.RightSide>
              <S.Question>너에게 ‘삶’이란 어떤 의미야?</S.Question>
            </S.RightSide>
            <S.CenterSide>
              <S.Question>
                감정이 없는 하루, 감정을 주체할 수 없는 하루<br />둘 중 하나를 골라 살아야 한다면?
              </S.Question>
            </S.CenterSide>
          </S.QuestionsWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </Section>
  );
}
