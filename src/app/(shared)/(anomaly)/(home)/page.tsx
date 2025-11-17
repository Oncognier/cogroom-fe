import type { Metadata } from 'next';

import { DEFAULT_OG_THUMBNAIL } from '@/constants/image';

import ActionBanner from './_components/ActionBanner/ActionBanner';
import Cogpoint from './_components/Cogpoint/Cogpoint';
import Community from './_components/Community/Community';
import Content from './_components/Content/Content';
import Daily from './_components/Daily/Daily';
import Hero from './_components/Hero/Hero';
import * as S from './page.styled';

export const metadata: Metadata = {
  title: '코그룸 | 생각하는 방',
  description: '모든 이의 내적 성장을 돕습니다. 인지과학 기반 자기이해와 성장을 위한 에듀테크 지식 플랫폼 cogroom',
  openGraph: {
    title: '코그룸 | 생각하는 방',
    description: '모든 이의 내적 성장을 돕습니다. 인지과학 기반 자기이해와 성장을 위한 에듀테크 지식 플랫폼 cogroom',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://cogroom.com',
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

export default function Home() {
  return (
    <S.Home>
      <Hero />
      <Cogpoint />
      <S.Space />
      <Daily />
      <S.Space />
      <Content />
      <S.Space />
      <Community />
      <ActionBanner />
    </S.Home>
  );
}
