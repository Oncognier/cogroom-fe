'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './Carousel.styled';
import CarouselCard from './CarouselCard';
import { GradientColor } from './CarouselCard.styled';

export default function Carousel() {
  return (
    <S.Wrapper>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView='auto'
        pagination={{ clickable: true }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        loop={true}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={`card-${index}`}>
            <CarouselCard
              href={card.href}
              src={card.src}
              alt={card.alt}
              heroTitle={card.heroTitle}
              title={card.title}
              content={card.content}
              contentType={card.contentType}
              gradientColor={card.gradientColor as GradientColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
}

// TODO: 데이터 패칭해서 쓸 예정
const cards = [
  {
    href: '/content',
    src: '/carousel1.png',
    alt: 'carousel',
    heroTitle: '우리는 지금부터,\n뇌를 마구 쪼갤 거예요',
    title: '뇌과학 기초',
    content: '우리는 지금부터, 뇌를 마구 쪼갤 거예요',
    contentType: 'PDF',
    gradientColor: 'black',
  },
  {
    href: '/content',
    src: '/carousel2.png',
    alt: 'carousel',
    heroTitle: '0세부터 지금까지\n‘나’ 알아가기',
    title: '발달심리학 개요',
    content: '0세부터 지금까지 ‘나’ 알아가기',
    contentType: 'PDF',
    gradientColor: 'primary',
  },
  {
    href: '/content',
    src: '/carousel3.png',
    alt: 'carousel',
    heroTitle: '이유없이 몸이 아플 때\n이것 1개만\n살펴보자',
    title: '몸-마음 연결',
    content: '이유없이 몸이 아플 때 이것 1개만 살펴보자',
    contentType: 'PDF',
    gradientColor: 'black',
  },
  {
    href: '/content',
    src: '/carousel4.png',
    alt: 'carousel',
    heroTitle: '마음이 궁금한\n모든 사람들에게',
    title: '인지과학 입문',
    content: '마음이 궁금한 모든 사람들에게',
    contentType: 'PDF',
    gradientColor: 'primary',
  },
  {
    href: '/content',
    src: '/carousel5.png',
    alt: 'carousel',
    heroTitle: 'AI가 지금의\n‘생각하는 기계’ 되기까지',
    title: '인공지능(AI) 본질',
    content: 'AI가 지금의 ‘생각하는 기계’ 되기까지',
    contentType: 'PDF',
    gradientColor: 'black',
  },
];
