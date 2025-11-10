'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';

import * as S from './page.styled';
import { useGetPlans } from '@/hooks/api/payment/useGetPlans';
import SubscriptionCard from './_components/SubscriptionCard/SubscriptionCard';
import { PLAN_MAPPING } from '@/constants/common';

export default function Subscription() {
  const router = useRouter();
  const { data: plans } = useGetPlans();

  const reorderedPlans = plans ? [plans[plans.length - 1], ...plans.slice(0, plans.length - 1)] : [];

  const handleClick = () => {
    router.push('/payment');
  };

  return (
    <S.Subscription>
      <S.FirstLayout>
        <S.SelectPlan>
          <S.TextWrapper>
            <S.Heading>
              {'‘나’'}를 알아가는 과정이
              <br />
              더욱 의미있도록
            </S.Heading>
            <S.Subtext>코그룸 구독으로 프리미엄 기능을 누려보세요</S.Subtext>
          </S.TextWrapper>

          <S.SubscriptionCardWrapper>
            {reorderedPlans.map((plan) => (
              <SubscriptionCard
                key={plan.planId}
                id={plan.planId}
                name={plan.name}
                basePrice={plan.basePrice}
                baseDiscountRate={plan.baseDiscountRate}
                finalPrice={plan.finalPrice}
                monthlyPrice={plan.monthlyPrice}
                description={plan.description}
                isBestValue={plan.planId === PLAN_MAPPING['YEAR']}
                isSubscribed={plan.planId === PLAN_MAPPING['FREE']}
              />
            ))}
          </S.SubscriptionCardWrapper>

          <SolidButton
            size='lg'
            label='지금 시작하기'
            color='primary'
            interactionVariant='normal'
            onClick={handleClick}
            round
          />
        </S.SelectPlan>
      </S.FirstLayout>
    </S.Subscription>
  );
}
