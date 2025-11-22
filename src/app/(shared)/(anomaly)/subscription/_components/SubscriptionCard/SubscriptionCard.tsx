'use client';

import { useRouter } from 'next/navigation';

import Check from '@/assets/icons/check.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { parsePlanDescription } from '@/utils/formatText';

import * as S from './SubscriptionCard.styled';

export interface SubscriptionCardProps {
  id: number;
  name: string;
  basePrice: number;
  baseDiscountRate: number;
  finalPrice: number;
  monthlyPrice: number;
  description: string;
  selectedId?: number;
  disabled?: boolean;
  isBestValue?: boolean;
  isSubscribed?: boolean;
  isFreeTrial?: boolean;
  isPremiumSubscribed?: boolean;
}

export default function SubscriptionCard({
  id,
  name,
  basePrice,
  baseDiscountRate,
  finalPrice,
  monthlyPrice,
  description,
  isBestValue = false,
  isSubscribed = false,
  isFreeTrial = false,
  isPremiumSubscribed = false,
}: SubscriptionCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (!isSubscribed) {
      let url = '/payment';

      if (id === 1) {
        url = '/payment?plan=MONTH';
      } else if (id === 2) {
        url = '/payment?plan=YEAR';
      }

      router.push(url);
    }
  };

  const parsedDescription = parsePlanDescription(description);
  const hasDiscount = typeof baseDiscountRate === 'number' && baseDiscountRate >= 1;

  const formatDiscountPrice = (basePrice: number, finalPrice: number, monthlyPrice: number): string => {
    if (finalPrice === monthlyPrice) {
      return `${basePrice.toLocaleString('ko-KR')}원`;
    }
    return `${basePrice.toLocaleString('ko-KR')}원 → ${finalPrice.toLocaleString('ko-KR')}원`;
  };

  const getButtonLabel = () => {
    if (isFreeTrial) {
      return isPremiumSubscribed ? '프리미엄 플랜 이용 중' : '현재 이용 중인 플랜';
    }
    if (isSubscribed) {
      return '현재 이용 중인 플랜';
    }
    return '시작하기';
  };

  const renderButton = () => {
    if (isFreeTrial) {
      return (
        <OutlinedButton
          size='lg'
          label={getButtonLabel()}
          color='primary'
          interactionVariant='normal'
          fillContainer
          isDisabled
        />
      );
    }

    if (isSubscribed) {
      return (
        <SolidButton
          size='lg'
          label={getButtonLabel()}
          color='assistive'
          interactionVariant='normal'
          fillContainer
          isDisabled
        />
      );
    }

    return (
      <SolidButton
        size='lg'
        label={getButtonLabel()}
        color='primary'
        interactionVariant='normal'
        onClick={handleClick}
        fillContainer
      />
    );
  };

  return (
    <S.SubscriptionCard $hasBestBadge={isBestValue}>
      {isBestValue && <S.BestBadge>가장 경제적이에요!</S.BestBadge>}

      <S.CardContainer>
        <S.PlanCardHeader>
          <S.PlanName>{name}</S.PlanName>

          {hasDiscount && (
            <SolidTag
              color='blue'
              label={`${baseDiscountRate}% 할인`}
              round
            />
          )}
        </S.PlanCardHeader>

        <S.PlanCardContent>
          <S.PriceInfoWrapper $hasDiscount={hasDiscount}>
            {hasDiscount && (
              <S.DiscountInfo>
                <span>{formatDiscountPrice(basePrice, finalPrice, monthlyPrice)}</span>
              </S.DiscountInfo>
            )}

            <S.FinalPrice>
              <S.Price>{monthlyPrice.toLocaleString('ko-KR')}원</S.Price>
              <S.Currency>KRW / 월</S.Currency>
            </S.FinalPrice>
          </S.PriceInfoWrapper>

          {renderButton()}

          <S.PlanDescriptionList>
            {parsedDescription.map((item, index) => {
              const isPending = item.includes('(준비중)');
              return (
                <S.ListItem key={index}>
                  <S.MarkerIcon>
                    <Check />
                  </S.MarkerIcon>
                  <S.Description
                    className={isPending ? 'pending' : undefined}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </S.ListItem>
              );
            })}
          </S.PlanDescriptionList>
        </S.PlanCardContent>
      </S.CardContainer>
    </S.SubscriptionCard>
  );
}
