import Image from 'next/image';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { DEFAULT_CONTENT_MAIN_BANNER } from '@/constants/image';

import * as S from './page.styled';

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
