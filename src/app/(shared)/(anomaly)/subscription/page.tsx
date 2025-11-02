'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';

import * as S from './page.styled';

export default function Subscription() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/payment');
  };

  return (
    <S.Subscription>
      <S.SelectPlan>
        <S.TextWrapper>
          <S.Heading>
            {'‘나’'}를 알아가는 과정이
            <br />
            더욱 의미있도록
          </S.Heading>
          <S.Subtext>코그룸 구독으로 프리미엄 기능을 누려보세요</S.Subtext>
        </S.TextWrapper>

        <Image
          src='/SubscriptionCard.png'
          alt='코그룸 프리미엄 구독 카드'
          width={1117}
          height={695}
          priority
        />

        <SolidButton
          size='lg'
          label='지금 시작하기'
          color='primary'
          interactionVariant='normal'
          onClick={handleClick}
          round
        />
      </S.SelectPlan>
    </S.Subscription>
  );
}
