import Graph from '@/assets/icons/graph.svg';
import { COGPOINT_CARDS } from '@/constants/common';

import * as S from './Cogpoint.styled';
import Section from '../Section/Section';

export default function Cogpoint() {
  return (
    <Section
      title='코그 포인트'
      subtitle='단순한 학습이 아닌 나를 알아가고 이해하는 여정을 제공합니다'
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
                <S.Subtitle>{card.subtitle}</S.Subtitle>
                <S.Title>{card.title}</S.Title>
                <S.Content>{card.content}</S.Content>
              </S.TextWrapper>
            </S.Card>
          ))}
        </S.CardList>
      </S.Wrapper>
    </Section>
  );
}
