import { DEFAULT_DAILY_WATERDROP } from '@/constants/image';

import * as S from './Daily.styled';
import { LineBreakMobile } from '@/styles/helpers/lineBreak';

export default function Daily() {
  return (
    <S.Wrapper>
      <a href='/daily'>
        <S.DailyImage
          src={DEFAULT_DAILY_WATERDROP}
          alt='daily'
          fill
          quality={100}
        />
        <S.ContentWrapper>
          <S.TitleWrapper>
            <S.Title>데일리</S.Title>
            <S.SubTitle>
              단순한 학습이 아닌
              <LineBreakMobile /> 나를 알아가고 이해하는 여정을 제공합니다
            </S.SubTitle>
          </S.TitleWrapper>

          <S.QuestionsWrapper>
            <S.Question>지금 드는 감정은...</S.Question>
            <S.RightSide>
              <S.Question>너에게 ‘삶’이란 어떤 의미야?</S.Question>
            </S.RightSide>
            <S.CenterSide>
              <S.Question>
                감정이 없는 하루, 감정을 주체할 수 없는 하루
                <br />둘 중 하나를 골라 살아야 한다면?
              </S.Question>
            </S.CenterSide>
          </S.QuestionsWrapper>
        </S.ContentWrapper>
      </a>
    </S.Wrapper>
  );
}
