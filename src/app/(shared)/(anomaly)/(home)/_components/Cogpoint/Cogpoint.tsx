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
          {cards.map((card, index) => (
            <S.Card key={`cogpoint-${index}`}>
              <S.CardImage
                src={card.src}
                alt=''
                width={300}
                height={170}
              />
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

const cards = [
  {
    src: '/cogpoint1.png',
    subtitle: 'for self growth',
    title: (
      <>
        나보다 나를 더 잘 아는 <br />
        자기이해 플랫폼
      </>
    ),
    content: (
      <>
        무의식적으로 해온 생각과 나도 몰랐던 나의
        <br />
        마음들을 알아차려요
      </>
    ),
  },
  {
    src: '/cogpoint2.png',
    subtitle: 'scientific method',
    title: (
      <>
        6가지 인지과학 분야로
        <br />
        체계적인 성장을
      </>
    ),
    content: '단순한 학습이 아닌, 과학적 학문 기반으로',
  },
  {
    src: '/cogpoint3.png',
    subtitle: 'for self growth',
    title: (
      <>
        나보다 나를 더 잘 아는
        <br />
        자기이해 플랫폼
      </>
    ),
    content: (
      <>
        무의식적으로 해온 생각과 나도 몰랐던 나의
        <br />
        마음들을 알아차려요
      </>
    ),
  },
];
