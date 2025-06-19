'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './Carousel.styled';
import CarouselCard from './CarouselCard';

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
              title={card.title}
              content={card.content}
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
    title: '뇌를 깨우는 5분 영상',
    content: '하루를 활기차게 시작해 보세요',
  },
  {
    href: '/content',
    src: '/carousel2.png',
    alt: 'carousel',
    title: '뇌를 깨우는 5분 영상',
    content: '하루를 활기차게 시작해 보세요',
  },
  {
    href: '/content',
    src: '/carousel3.png',
    alt: 'carousel',
    title: '뇌를 깨우는 5분 영상',
    content: '하루를 활기차게 시작해 보세요',
  },
  {
    href: '/content',
    src: '/carousel1.png',
    alt: 'carousel',
    title: '뇌를 깨우는 5분 영상',
    content: '하루를 활기차게 시작해 보세요',
  },
  {
    href: '/content',
    src: '/carousel2.png',
    alt: 'carousel',
    title: '뇌를 깨우는 5분 영상',
    content: '하루를 활기차게 시작해 보세요',
  },
];