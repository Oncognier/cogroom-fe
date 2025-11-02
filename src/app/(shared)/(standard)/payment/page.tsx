'use client';

import PortOne from '@portone/browser-sdk/v2';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { useChangePlanMutation } from '@/hooks/api/payment/useChangePlan';
import { useGetBillingKey } from '@/hooks/api/payment/useGetBillingKey';
import { useGetPlanInfo } from '@/hooks/api/payment/useGetPlanInfo';
import { useGetPlans } from '@/hooks/api/payment/useGetPlans';
import { useVerifyPaymentMutation } from '@/hooks/api/payment/useVerifyPayment';

import PaymentCard from './_components/PaymentCard/PaymentCard';
import * as S from './page.styled';

const PLAN_MAPPING: Record<string, number> = {
  MONTH: 1,
  YEAR: 2,
};

export default function Payment() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan');

  const [selectedId, setSelectedId] = useState<number>(PLAN_MAPPING[planParam ?? 'MONTH']);
  const { data: billingKey } = useGetBillingKey();
  const { data: plans } = useGetPlans();
  const { data: planInfo } = useGetPlanInfo(selectedId);
  const { verifyPayment } = useVerifyPaymentMutation();
  const { changePlan } = useChangePlanMutation();

  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [showAgreementError, setShowAgreementError] = useState<boolean>(false);

  const handleClick = async () => {
    if (!isAgreed) {
      setShowAgreementError(true);
      return;
    }

    setShowAgreementError(false);

    if (!planInfo) {
      return alert('결제 정보를 불러오는 데 실패했습니다.');
    }

    if (billingKey?.isExist) {
      changePlan({ paymentHistoryId: planInfo?.paymentHistoryId });
      return;
    }

    const response = await PortOne.requestIdentityVerification({
      storeId: 'store-0746d3bf-7b4d-4961-8ebb-9c1f3335cda8',
      identityVerificationId: `identity-verification-5`,
      channelKey: 'channel-key-23cd71f0-f2f9-444a-b1bf-0d10c94448d9',
    });

    if (!response) {
      return alert('본인인증에 실패하였습니다');
    }

    verifyPayment({
      identityVerificationId: response.identityVerificationId,
      paymentHistoryId: planInfo?.paymentHistoryId,
    });
  };

  return (
    <S.Payment>
      <S.PaymentCardWrapper>
        {plans?.map((plan) => (
          <PaymentCard
            key={plan.planId}
            id={plan.planId}
            name={plan.name}
            basePrice={plan.basePrice}
            baseDiscountAmount={plan.baseDiscountAmount}
            finalPrice={plan.finalPrice}
            selectedId={selectedId ?? undefined}
            onSelect={setSelectedId}
          />
        ))}
      </S.PaymentCardWrapper>
      <S.PaymentInfo>
        <S.PaymentSummary>
          <S.PaymentDetail>
            <S.InfoWrapper>
              <S.InfoText>코그룸 프리미엄 구독</S.InfoText>
              <S.PlanPrice>{planInfo?.basePrice} KRW</S.PlanPrice>
            </S.InfoWrapper>

            <S.DiscountInfo>
              <S.InfoText>할인 적용</S.InfoText>
              <S.InfoWrapper>
                <SolidTag
                  color='blue'
                  label='기본 적용 할인'
                  round
                />
                <S.DiscountPrice>-{planInfo?.baseDiscountAmount} KRW</S.DiscountPrice>
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
          </S.PaymentDetail>

          <S.Divider />

          <S.PaymentResult>
            <S.InfoWrapper>
              <S.ResultText>결제 및 총합</S.ResultText>
              <S.ResultText>{planInfo?.finalPrice} KRW</S.ResultText>
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
