'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { PLAN_MAPPING } from '@/constants/common';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useGetBillingKey } from '@/hooks/api/payment/useGetBillingKey';
import { useGetPlanInfo } from '@/hooks/api/payment/useGetPlanInfo';
import { useGetPlans } from '@/hooks/api/payment/useGetPlans';
import { usePaymentProcessor } from '@/hooks/api/payment/usePaymentProcessor';

import PaymentCard from './_components/PaymentCard/PaymentCard';
import * as S from './page.styled';

const isFreeTrialAvailable = (trialParam: boolean, isTrialUsed: boolean, planId: number) => {
  const monthlyPlanId = PLAN_MAPPING['MONTH'];
  return trialParam && !isTrialUsed && planId === monthlyPlanId;
};

export default function Payment() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan') ?? 'MONTH';
  const isTrialParam = searchParams.get('trial') === 'true';

  const [selectedId, setSelectedId] = useState<number>(PLAN_MAPPING[planParam]);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [showAgreementError, setShowAgreementError] = useState<boolean>(false);

  const { data: userSummary } = useGetUserSummary();
  const { data: billingKey } = useGetBillingKey();
  const { data: plans } = useGetPlans();
  const { data: planInfo } = useGetPlanInfo(
    selectedId,
    isFreeTrialAvailable(isTrialParam, userSummary?.isTrialUsed ?? false, selectedId),
  );
  const { startPaymentFlow } = usePaymentProcessor();

  const handleClick = async () => {
    if (!isAgreed) {
      setShowAgreementError(true);
      return;
    }

    setShowAgreementError(false);

    if (!planInfo || !billingKey) {
      alert('결제 정보를 불러오는 데 실패했습니다.');
      return;
    }

    startPaymentFlow(planInfo.paymentHistoryId, billingKey?.isExist);
  };

  return (
    <S.Payment>
      <S.PaymentCardWrapper>
        {plans?.slice(0, -1).map((plan) => (
          <PaymentCard
            key={plan.planId}
            id={plan.planId}
            name={plan.name}
            basePrice={plan.basePrice}
            finalPrice={plan.finalPrice}
            monthlyPrice={plan.monthlyPrice}
            description={plan.description}
            selectedId={selectedId}
            onSelect={setSelectedId}
            isFreeTrial={isFreeTrialAvailable(isTrialParam, userSummary?.isTrialUsed ?? false, plan.planId)}
          />
        ))}
      </S.PaymentCardWrapper>

      <S.PaymentInfo>
        <S.PaymentSummary>
          <S.PaymentDetail>
            <S.InfoWrapper>
              <S.InfoText>코그룸 프리미엄 구독</S.InfoText>
              <S.PlanPrice>{planInfo?.basePrice ?? '-'} KRW</S.PlanPrice>
            </S.InfoWrapper>

            <S.DiscountInfo>
              <S.InfoText>할인 적용</S.InfoText>
              <S.InfoWrapper>
                <SolidTag
                  color='blue'
                  label='기본 적용 할인'
                  round
                />
                <S.DiscountPrice>-{planInfo?.baseDiscountAmount ?? 0} KRW</S.DiscountPrice>
              </S.InfoWrapper>
            </S.DiscountInfo>

            <S.InfoWrapper>
              <S.InfoText>쿠폰 사용</S.InfoText>
              <OutlinedButton
                size='sm'
                color='assistive'
                label='선택하기'
                interactionVariant='normal'
                isDisabled
              />
            </S.InfoWrapper>

            <S.PaymentMethod>
              <S.PaymentMethodTitle>결제 수단</S.PaymentMethodTitle>

              <S.PaymentMethodRow onClick={() => setSelectedPaymentMethod('CARD')}>
                <Checkbox
                  size='nm'
                  isChecked={selectedPaymentMethod === 'CARD'}
                  onToggle={() => setSelectedPaymentMethod('CARD')}
                  interactionVariant='normal'
                  round
                />
                <S.PaymentMethodLabel>신용카드</S.PaymentMethodLabel>
              </S.PaymentMethodRow>

              <S.PaymentMethodRow onClick={() => setSelectedPaymentMethod('KAKAO')}>
                <Checkbox
                  size='nm'
                  isChecked={selectedPaymentMethod === 'KAKAO'}
                  onToggle={() => setSelectedPaymentMethod('KAKAO')}
                  interactionVariant='normal'
                  round
                />
                <S.PaymentMethodLabel>카카오페이</S.PaymentMethodLabel>
              </S.PaymentMethodRow>

              <S.PaymentMethodRow onClick={() => setSelectedPaymentMethod('PHONE')}>
                <Checkbox
                  size='nm'
                  isChecked={selectedPaymentMethod === 'PHONE'}
                  onToggle={() => setSelectedPaymentMethod('PHONE')}
                  interactionVariant='normal'
                  round
                />
                <S.PaymentMethodLabel>휴대폰</S.PaymentMethodLabel>
              </S.PaymentMethodRow>
            </S.PaymentMethod>
          </S.PaymentDetail>

          <S.Divider />

          <S.PaymentResult>
            <S.InfoWrapper>
              <S.ResultText>결제 및 총합</S.ResultText>
              <S.ResultText>{planInfo?.monthlyPrice ?? '-'} KRW</S.ResultText>
            </S.InfoWrapper>

            <S.AgreementSection>
              <S.AgreementRow>
                <Checkbox
                  size='nm'
                  isChecked={isAgreed}
                  onToggle={(checked) => {
                    setIsAgreed(checked);
                    if (checked) setShowAgreementError(false);
                  }}
                  interactionVariant='normal'
                />
                <S.AgreementLabel>
                  (필수){' '}
                  <S.AgreementLink href='https://oncognier.notion.site/2963f9bd81c68065aa38c15fb5c6b484'>
                    결제 약관 및 방침
                  </S.AgreementLink>
                  에 동의합니다
                </S.AgreementLabel>
              </S.AgreementRow>

              {showAgreementError && <S.AgreementError>결제 약관 및 방침에 동의해주세요</S.AgreementError>}
            </S.AgreementSection>
          </S.PaymentResult>
        </S.PaymentSummary>

        <SolidButton
          size='lg'
          label='지금 시작하기'
          color='primary'
          interactionVariant='normal'
          onClick={handleClick}
          isDisabled={planInfo?.isSubscribed}
        />
      </S.PaymentInfo>
    </S.Payment>
  );
}
