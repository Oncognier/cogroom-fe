'use client';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';

import * as S from './PaymentCard.styled';

export interface PaymentCardProps {
  id: number;
  name: string;
  basePrice: number;
  baseDiscountAmount: number;
  finalPrice: number;
  selectedId?: number;
  onSelect: (id: number) => void;
  disabled?: boolean;
}

export default function PaymentCard({
  id,
  name,
  basePrice,
  baseDiscountAmount = 0,
  finalPrice,
  selectedId,
  onSelect,
  disabled = false,
}: PaymentCardProps) {
  const isChecked = selectedId === id;

  const discountedPrice = basePrice - baseDiscountAmount;
  const totalPrice = discountedPrice.toLocaleString('ko-KR');
  const basePriceLabel = basePrice.toLocaleString('ko-KR');

  const handleClick = () => {
    if (disabled) return;
    onSelect(id);
  };

  return (
    <S.PaymentCard
      role='button'
      aria-pressed={isChecked}
      onClick={handleClick}
    >
      <S.PlanCardHeader>
        <S.PlanName>{name}</S.PlanName>
        <Checkbox
          size='nm'
          isChecked={isChecked}
          interactionVariant='normal'
          round
        />
      </S.PlanCardHeader>

      <S.PlanCardContent>
        <S.PriceInfoWrapper>
          <S.DiscountInfo>
            {basePriceLabel} → {totalPrice}
          </S.DiscountInfo>
          <S.FinalPrice>
            <S.Price>{finalPrice}원</S.Price>
            <S.Currency>KRW / 월</S.Currency>
          </S.FinalPrice>
        </S.PriceInfoWrapper>
      </S.PlanCardContent>
    </S.PaymentCard>
  );
}
