// TODO: 추후 수정 필요
import Image from 'next/image';

import { DEFAULT_LOGO_SYMBOL_GRAY, DEFAULT_LOGO_KOREAN } from '@/constants/image';

import * as S from './Footer.styled';
import SocialLink from './SocialLink/SocialLink';

export default function Footer() {
  return (
    <S.Footer>
      <S.FooterWrapper>
        {/* <Image
        src={DEFAULT_LOGO_SYMBOL_GRAY}
        alt='Logo'
        width={24}
        height={24}
        />
        <Image
        src={DEFAULT_LOGO_KOREAN}
        alt='Logo'
        width={120}
        height={23}
        /> */}
        {/* <S.InfoWrapper>
        <S.Info>
        상호명: 주식회사 온코그니어 <span> | </span> 대표: 김다희 <span> | </span> 사업자등록번호: 123-45-67890
        <span> | </span> 통신판매번호: 2025-서울마포-1234
        </S.Info>
        <S.Info>
        주소: 서울특별시 마포구 마포대로 1234, 56층 <span> | </span> 문의: contact@oncognier.ai
        </S.Info>
        <S.Info>Copyright © 2025 주식회사 온코그니어 All Rights Reserved</S.Info>
        </S.InfoWrapper> */}

        <S.FooterBottom>
          {/* <S.FooterLinks>
          <Link href={'/daily'}>이용 약관</Link>
          <span>|</span>
          <Link href={'/daily'}>개인정보 처리방침</Link>
          <span>|</span>
          <Link href={'/daily'}>고객 지원</Link>
          </S.FooterLinks> */}
          <S.LogoWrapper>
            <Image
              src={DEFAULT_LOGO_SYMBOL_GRAY}
              alt='Logo'
              width={24}
              height={24}
            />
            <Image
              src={DEFAULT_LOGO_KOREAN}
              alt='Logo'
              width={48}
              height={16}
            />
          </S.LogoWrapper>
          <SocialLink />
        </S.FooterBottom>
      </S.FooterWrapper>
    </S.Footer>
  );
}
