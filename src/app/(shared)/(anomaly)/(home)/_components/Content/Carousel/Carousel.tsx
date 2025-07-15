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


// 뇌과학 기초 지식
// 우리는 지금부터, 뇌를 마구 쪼갤 거예요 

// 발달심리학 개요
// 0세부터 지금까지 ‘나’ 알아보기 

// 심리적 번아웃
// 모르면 손해보는 번아웃 방지법 

// 방어기제 타파하기
// 합리화하지 않고 더 나은 나 만들기

// 애착유형의 모든 것
// 회피형, 불안형, 그리고 ‘이것’ 애착이란?

// 몸-마음 연결 
// 이유 없이 몸이 아플 때, 1개만 살펴보자

// 인지과학 입문하기 
// 마음이 궁금한 모든 사람들에게 

// 인공지능(AI) 본질이란 
// AI가 실제 ‘생각하는 기계’ 되기까지

// 코그룸 이용 가이드 
// (필독) 코그룸에 처음 왔다면 

// 수: 물의 여정 
// (추천) 어쩌면 당신도 작은 물방울일지도