'use client';

import PaymentTabSelect from './_components/PaymentTabSelect/PaymentTabSelect';
import * as S from './page.styled';

export default function Payments() {
  return (
    <S.PaymentContainer>
      <PaymentTabSelect />
    </S.PaymentContainer>
  );
}
