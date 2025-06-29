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
        {/* <S.BannerTitleWrapper>
          <S.BannerTitle>서로 안아주기</S.BannerTitle>
          <S.BannerTitle>더욱 알아가기</S.BannerTitle>
          <S.BannerTitle>진짜 대화하기</S.BannerTitle>
        </S.BannerTitleWrapper> */}
      </S.BannerWrapper>
    </S.ContentContainer>
  );
}
