import Image from 'next/image';
import Link from 'next/link';

import { DEFAULT_LOGO_SYMBOL_GRAY, DEFAULT_LOGO_KOREAN } from '@/constants/image';

import * as S from './Footer.styled';
import SocialLink from './SocialLink/SocialLink';

export default function Footer() {
  return (
    <S.Footer>
      <S.FooterWrapper>
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

        <S.InfoWrapper>
          <S.Info>
            상호명: 온코그니어 Oncognier <span> | </span> 대표: 김다희 <span> | </span> 사업자등록번호: 663-01-03713
            <span> | </span> 통신판매업 신고 번호: 2025-수원권선-0559
          </S.Info>
          <S.Info>
            주소: 경기 수원시 권선구 매실로 47-14, 16400, 4층 <span> | </span> 문의: oncognier@gmail.com
          </S.Info>
          <S.Info>Copyright © 2025 주식회사 온코그니어 All Rights Reserved</S.Info>
        </S.InfoWrapper>

        <S.FooterBottom>
          <S.FooterLinks>
            <Link href={'/terms'}>이용 약관</Link>
            <Link href={'/privacy'}>개인정보 처리방침</Link>
            <Link href={'/marketing'}>마케팅 정보 수신동의</Link>
          </S.FooterLinks>
          <SocialLink />
        </S.FooterBottom>
      </S.FooterWrapper>
    </S.Footer>
  );
}
