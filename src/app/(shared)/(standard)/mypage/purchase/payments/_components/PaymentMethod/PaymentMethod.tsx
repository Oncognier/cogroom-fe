'use client';

import { useState } from 'react';

import Kakao from '@/assets/icons/kakao.svg';
import Plus from '@/assets/icons/plus.svg';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { useRegisterPaymentMethod } from '@/hooks/api/payment/useRegisterPaymentMethod';

import * as S from './PaymentMethod.styled';

export const PaymentMethod = () => {
  const [savePaymentMethod, setSavePaymentMethod] = useState(false);
  const { registerPaymentMethod } = useRegisterPaymentMethod();

  const handleAddCard = () => {
    registerPaymentMethod({
      paymentMethod: 'CARD',
      billingParams: {
        finalPrice: 0,
        planName: '카드 등록',
      },
      isFromMyPage: true,
    });
  };

  const handleAddKakaoPay = () => {
    registerPaymentMethod({
      paymentMethod: 'KAKAO_PAY',
      billingParams: {
        finalPrice: 0,
        planName: '카카오페이 등록',
      },
      isFromMyPage: true,
    });
  };

  return (
    <S.MethodContainer>
      <S.PaymentMethodsWrapper>
        <OutlinedButton
          size='sm'
          label={'체크/신용 카드'}
          color='primary'
          interactionVariant='normal'
        />

        <TextButton
          size='sm'
          color='primary'
          label='추가하기'
          interactionVariant='normal'
          iconLeft={<Plus />}
          onClick={handleAddCard}
        />
      </S.PaymentMethodsWrapper>

      <S.Divider />

      <S.PaymentMethodsWrapper>
        <OutlinedButton
          size='sm'
          label={'카카오페이'}
          color='kakao'
          interactionVariant='normal'
          iconRight={<Kakao className='kakao' />}
        />

        <TextButton
          size='sm'
          color='primary'
          label='추가하기'
          interactionVariant='normal'
          iconLeft={<Plus />}
          onClick={handleAddKakaoPay}
        />
      </S.PaymentMethodsWrapper>

      <S.Divider />

      <S.CheckboxWrapper>
        <Checkbox
          size='nm'
          isChecked={savePaymentMethod}
          onToggle={setSavePaymentMethod}
          interactionVariant='normal'
        />
        <S.CheckboxLabel>선택한 결제 수단을 다음에도 사용</S.CheckboxLabel>
      </S.CheckboxWrapper>
    </S.MethodContainer>
  );
};
