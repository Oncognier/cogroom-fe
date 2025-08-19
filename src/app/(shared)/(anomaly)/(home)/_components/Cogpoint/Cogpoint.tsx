import { COGPOINT_CARDS } from '@/constants/common';

import * as S from './Cogpoint.styled';
import Section from '../Section/Section';
import CogpointMobileSwiper from './CogpointMobileSwiper/CogpointMobileSwiper';
import { LineBreakMobile } from '@/styles/helpers/lineBreak';

export default function Cogpoint() {
  return (
    <Section
      title='생각하는 방에서 할 수 있는 것'
      subtitle={
        <>
          단순한 학습이 아닌 나를 알아가고
          <LineBreakMobile /> 이해하는 여정을 제공합니다
        </>
      }
    >
      <S.Wrapper>
        <S.CardList>
          {COGPOINT_CARDS.map((card, index) => (
            <S.Card key={`cogpoint-${index}`}>
              <S.IconWrapper>
                <S.Icon>
                  <card.icon />
                </S.Icon>
              </S.IconWrapper>
              <S.TextWrapper>
                <S.TitleWrapper>
                  <S.Subtitle>{card.subtitle}</S.Subtitle>
                  <S.Title>{card.title}</S.Title>
                </S.TitleWrapper>
                <S.Content>{card.content}</S.Content>
              </S.TextWrapper>
            </S.Card>
          ))}
        </S.CardList>

        <CogpointMobileSwiper />
      </S.Wrapper>
    </Section>
  );
}
