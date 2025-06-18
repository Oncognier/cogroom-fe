// 'use client';

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import * as S from './Carousel.styled';
// import CarouselCard from './CarouselCard';

// export default function Carousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 10000,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     cssEase: 'linear',
//     variableWidth: false,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1080,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 748,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const cards = [
//     {
//       src: '/carousel1.png',
//       alt: 'carousel',
//     },
//     {
//       src: '/carousel2.png',
//       alt: 'carousel',
//     },
//     {
//       src: '/carousel3.png',
//       alt: 'carousel',
//     },
//     {
//       src: '/carousel1.png',
//       alt: 'carousel',
//     },
//     {
//       src: '/carousel2.png',
//       alt: 'carousel',
//     },
//   ];

//   return (
//     <S.Wrapper>
//       <Slider {...settings}>
//         {cards.map((card, index) => (
//           <CarouselCard
//             key={`carousel-${index}`}
//             src={card.src}
//             alt={card.alt}

//           />
//         ))}
//       </Slider>
//     </S.Wrapper>
//   );
// }
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import * as S from './Carousel.styled';
import CarouselCard from './CarouselCard';

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
