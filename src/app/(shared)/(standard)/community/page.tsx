import Image from 'next/image';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { DEFAULT_COMMUNITY_MAIN_BANNER } from '@/constants/image';

import * as S from './page.styled';

export default function Community() {
  return (
    <S.ContentContainer>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '커뮤니티', href: '/community' },
        ]}
      />
      <S.BannerWrapper>
        <Image
          src={DEFAULT_COMMUNITY_MAIN_BANNER}
          alt='community banner'
          fill
        />
      </S.BannerWrapper>
    </S.ContentContainer>
  );
}
