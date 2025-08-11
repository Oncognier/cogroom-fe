import type { Metadata } from 'next';
import Image from 'next/image';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { DEFAULT_CONTENT_MAIN_BANNER, DEFAULT_OG_THUMBNAIL } from '@/constants/image';

import * as S from './page.styled';

export const metadata: Metadata = {
  title: '생각하는 삶을 위한 지식 아카이브',
  description: '뇌과학 인지심리학 기반의 체계적인 인사이트 코그룸 콘텐츠가 당신의 일상에 확신과 방향을 더합니다',
  openGraph: {
    title: '생각하는 삶을 위한 지식 아카이브',
    description: '뇌과학 인지심리학 기반의 체계적인 인사이트 코그룸 콘텐츠가 당신의 일상에 확신과 방향을 더합니다',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://cogroom.com/content',
    siteName: '코그룸',
    images: [
      {
        url: DEFAULT_OG_THUMBNAIL,
        width: 1200,
        height: 630,
        alt: '코그룸 브랜드 메인 썸네일',
      },
    ],
  },
};

export default function Content() {
  return (
    <S.ContentContainer>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '콘텐츠', href: '/content' },
        ]}
      />
      <a
        href='https://oncognier.com/all'
        target='_blank'
      >
        <S.BannerWrapper>
          <Image
            src={DEFAULT_CONTENT_MAIN_BANNER}
            alt='content banner'
            fill
            quality={100}
          />
          <S.BannerTitleWrapper>
            <S.BannerSubTitle>인지과학 기반의 심층 지식 콘텐츠로</S.BannerSubTitle>
            <S.BannerTitle>더욱 성장하러 가기</S.BannerTitle>
          </S.BannerTitleWrapper>
        </S.BannerWrapper>
      </a>
    </S.ContentContainer>
  );
}
