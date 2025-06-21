'use client';

import Image from 'next/image';
import Link from 'next/link';

import * as S from './CarouselCard.styled';

interface CarouselCardProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  content: string;
}

export default function CarouselCard({ href, src, alt, title, content }: CarouselCardProps) {
  return (
    <S.CarouselCard>
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={340}
          height={172}
          quality={100}
        />
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.Content>{content}</S.Content>
        </S.TextContainer>
      </Link>
    </S.CarouselCard>
  );
}
