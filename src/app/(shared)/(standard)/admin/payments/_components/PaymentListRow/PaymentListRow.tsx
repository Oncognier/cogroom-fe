'use client';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { PaymentHistory } from '@/types/admin';
import { formatDayAsSlashYYMMDD, formatTimeAsHHmm } from '@/utils/date/formatDay';

import * as S from './PaymentListRow.styled';

interface PaymentListRowProps {
  payment: PaymentHistory;
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'PAID':
      return '결제완료';
    case 'FAILED':
      return '실패';
    case 'PENDING':
      return '결제 대기중';
    default:
      return status;
  }
};

const getPaymentMethod = (method: string) => {
  switch (method) {
    case 'KAKAO':
      return '카카오페이';
    case 'CARD':
      return '신용/체크카드';
    default:
      return method;
  }
};

const formatOrderNumber = (orderNumber: string) => {
  if (orderNumber.startsWith('ORD')) {
    const prefix = 'ORD';
    const number = orderNumber.slice(3);
    return { prefix, number };
  }
  return { prefix: '', number: orderNumber };
};

export default function PaymentListRow({ payment, checked, onCheckToggle }: PaymentListRowProps) {
  const handleDetailView = () => {};
  const { prefix, number } = formatOrderNumber(payment.paymentHistoryId);

  return (
    <S.Row>
      <S.CheckboxCell>
        <Checkbox
          size='nm'
          isChecked={checked}
          onToggle={onCheckToggle}
          interactionVariant='normal'
          name={`payment_${payment.paymentHistoryId}`}
        />
      </S.CheckboxCell>

      <S.Cell>
        <div>{prefix}</div>
        <div>{number}</div>
      </S.Cell>
      <S.OtherCell>{payment.memberId}</S.OtherCell>
      <S.Cell>{payment.nickname}</S.Cell>
      <S.OtherCell>{payment.planName}</S.OtherCell>
      <S.Cell>{payment.category}</S.Cell>
      <S.CountCell>{payment.count}</S.CountCell>
      <S.Cell>{payment.price.toLocaleString()}원</S.Cell>
      <S.Cell>{getPaymentMethod(payment.method)}</S.Cell>
      <S.Cell>{getStatusText(payment.status)}</S.Cell>
      <S.DayCell>
        <S.Cell>{formatDayAsSlashYYMMDD(payment.paidAt)}</S.Cell>
        <S.Cell>{formatTimeAsHHmm(payment.paidAt)}</S.Cell>
      </S.DayCell>
      <S.ButtonCell>
        <TextButton
          size='sm'
          color='assistive'
          label='상세보기'
          interactionVariant='normal'
          onClick={handleDetailView}
        />
      </S.ButtonCell>
    </S.Row>
  );
}
