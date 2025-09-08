import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { DEFAULT_COMMUNITY_MAIN_BANNER, DEFAULT_OG_THUMBNAIL } from '@/constants/image';

import CommunityActions from './_components/CommunityActions';
import CommunityDescription from './_components/CommunityDescription';
import * as S from './page.styled';

export const metadata: Metadata = {
  title: '생각하는 사람들이 모인 곳',
  description:
    '코그룸 심리학 커뮤니티. 혼자서는 닿을 수 없던 깊은 성찰을 함께 나누는 공간입니다. 우리는 코그니어(cognier).',
  openGraph: {
    title: '생각하는 사람들이 모인 곳',
    description:
      '코그룸 심리학 커뮤니티. 혼자서는 닿을 수 없던 깊은 성찰을 함께 나누는 공간입니다. 우리는 코그니어(cognier).',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://cogroom.com/community',
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

export default function Community() {
  return (
    <S.ContentContainer>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '커뮤니티', href: '/community' },
        ]}
      />
      <CommunityDescription />
      <CommunityActions />
      <a
        href='https://oncognier.com/community'
        target='_blank'
      >
        <S.BannerWrapper>
          <Image
            src={DEFAULT_COMMUNITY_MAIN_BANNER}
            alt='community banner'
            fill
            quality={100}
          />
          <S.BannerTitleWrapper>
            <S.BannerTitle>서로 안아주기</S.BannerTitle>
            <S.BannerTitle>더욱 알아가기</S.BannerTitle>
            <S.BannerTitle>진짜 대화하기</S.BannerTitle>
          </S.BannerTitleWrapper>
        </S.BannerWrapper>
      </a>
    </S.ContentContainer>
  );
}
