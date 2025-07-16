'use client';

import Image from 'next/image';
import Link from 'next/link';

import * as S from './CarouselCard.styled';

import type { CarouselCardStyleProps } from './CarouselCard.styled';

interface CarouselCardProps extends CarouselCardStyleProps {
  href: string;
  src: string;
  alt: string;
  heroTitle: string;
  title: string;
  content: string;
  contentType: string;
}

export default function CarouselCard({
  href,
  src,
  alt,
  heroTitle,
  title,
  content,
  contentType,
  gradientColor = 'black',
}: CarouselCardProps) {
  return (
    <Link href={href}>
      <S.CarouselCard>
        <S.ImageWrapper>
          <Image
            src={src}
            alt={alt}
            quality={100}
            fill
            style={{ objectFit: 'cover' }}
          />
          <S.Overlay gradientColor={gradientColor} />
          <S.HeroWrapper>
            <S.HeroTitle>{heroTitle}</S.HeroTitle>
            <S.Badge>{contentType}</S.Badge>
          </S.HeroWrapper>
        </S.ImageWrapper>

        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.Content>{content}</S.Content>
        </S.TextContainer>
      </S.CarouselCard>
    </Link>
  );
}
