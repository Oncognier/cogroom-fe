'use client';

import { useState } from 'react';

import Plus from '@/assets/icons/plus.svg';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import TextButton from '@/components/atoms/TextButton/TextButton';

import * as S from './PaymentMethod.styled';

export const PaymentMethod = () => {
  const [savePaymentMethod, setSavePaymentMethod] = useState(false);

  return (
    <S.MethodContainer>
      <S.PaymentMethodsWrapper>
        <OutlinedButton
          size='sm'
          label={'휴대폰 결제'}
          color='primary'
          interactionVariant='normal'
          // onClick={() => {}}
        />

        <TextButton
          size='sm'
          color='primary'
          label='추가하기'
          interactionVariant='normal'
          iconLeft={<Plus />}
          // onClick={() =>{} }
        />

        <OutlinedButton
          size='sm'
          label={'체크/신용 카드'}
          color='primary'
          interactionVariant='normal'
          // onClick={() => {}}
        />

        <TextButton
          size='sm'
          color='primary'
          label='추가하기'
          interactionVariant='normal'
          iconLeft={<Plus />}
          // onClick={() =>{} }
        />
      </S.PaymentMethodsWrapper>

      <S.Divider />

      <S.PaymentMethodsWrapper>
        <OutlinedButton
          size='sm'
          label={'카카오페이'}
          color='kakao'
          interactionVariant='normal'
          // onClick={() => {}}
        />

        <TextButton
          size='sm'
          color='primary'
          label='추가하기'
          interactionVariant='normal'
          iconLeft={<Plus />}
          // onClick={() =>{} }
        />

        <OutlinedButton
          size='sm'
          label={'네이버페이'}
          color='naver'
          interactionVariant='normal'
          // onClick={() => {}}
        />

        <TextButton
          size='sm'
          color='primary'
          label='추가하기'
          interactionVariant='normal'
          iconLeft={<Plus />}
          // onClick={() =>{} }
        />
      </S.PaymentMethodsWrapper>

      <S.Divider />

      <S.CheckboxWrapper>
        <Checkbox
          size='nm'
          isChecked={savePaymentMethod}
          // onToggle={onCheckToggle}
          interactionVariant='normal'
        />
        <S.CheckboxLabel>선택한 결제 수단을 다음에도 사용</S.CheckboxLabel>
      </S.CheckboxWrapper>
    </S.MethodContainer>
  );
};
