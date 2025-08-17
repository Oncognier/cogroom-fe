'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { COGPOINT_CARDS } from '@/constants/common';

import * as S from './CogpointSwiper.styled';

import 'swiper/css';
import 'swiper/css/pagination';

export default function CogpointSwiper() {
  return (
    <S.MobileSwiper>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView='auto'
        centeredSlides={false}
      >
        {COGPOINT_CARDS.map((card, i) => (
          <SwiperSlide
            key={`cogpoint-mobile-${i}`}
            style={{ width: '19.2rem' }}
          >
            <S.Card>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </S.MobileSwiper>
  );
}
