import Image from 'next/image';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { DEFAULT_CONTENT_BANNER } from '@/constants/image';

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
      <S.BannerWrapper>
        <Image
          src={DEFAULT_CONTENT_BANNER}
          alt='content banner'
          fill
        />
      </S.BannerWrapper>
    </S.ContentContainer>
  );
}
