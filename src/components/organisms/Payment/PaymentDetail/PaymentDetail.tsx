import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { PaymentDetailData } from '@/types/payment';
import { formatDayAsYYYYMMDD, formatTimeAsHHmmss } from '@/utils/date/formatDay';
import { formatOrderNumber } from '@/utils/formatText';

import * as S from './PaymentDetail.styled';

interface PaymentDetailProps {
  paymentData: PaymentDetailData;
}

export const PaymentDetail = ({ paymentData }: PaymentDetailProps) => {
  const getPaymentMethod = (method: string) => {
    switch (method) {
      case 'KAKAO_PAY':
        return '카카오페이';
      case 'CARD':
        return '신용/체크카드';
      default:
        return method;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'PAID':
        return '결제완료';
      case 'FAILED':
        return '결제실패';
      case 'PENDING':
        return '결제 대기중';
      default:
        return status;
    }
  };

  return (
    <S.PaymentDetailContainer>
      <S.PlanTtileWrapper>
        <S.PlanTitleBox>
          <S.PlanTitleLabel>상품명</S.PlanTitleLabel>
          <S.PlanTitleValue>{paymentData.planName}</S.PlanTitleValue>
        </S.PlanTitleBox>
        <S.PlanTitleBox>
          <S.PlanTitleLabel>결제 번호</S.PlanTitleLabel>
          <S.PlanTitleValue>{formatOrderNumber(paymentData.paymentHistoryId)}</S.PlanTitleValue>
        </S.PlanTitleBox>
        <S.PlanTitleBox>
          <S.PlanTitleLabel>결제 상태</S.PlanTitleLabel>
          <S.PaymentStateName $isPaid={paymentData.status === 'PAID'}>
            {getStatusText(paymentData.status)}
          </S.PaymentStateName>
        </S.PlanTitleBox>
      </S.PlanTtileWrapper>

      <S.Divider />

      <S.PaymentInfoWrapper>
        <S.PartTitle>결제 정보</S.PartTitle>
        <S.PartLabel>회원 번호 : {paymentData.memberId}</S.PartLabel>
        <S.PartLabel>
          결제 일시 : {formatDayAsYYYYMMDD(paymentData.paidAt)} {formatTimeAsHHmmss(paymentData.paidAt)}
        </S.PartLabel>

        <S.MethodBox>
          <S.MethodBoxLeft>
            <S.PartLabel>결제 수단 :</S.PartLabel>
          </S.MethodBoxLeft>

          <S.MethodBoxRight>
            <S.PartLabel>{getPaymentMethod(paymentData.method)}</S.PartLabel>
            <S.PartSubLabel>카카오페이</S.PartSubLabel>
          </S.MethodBoxRight>
        </S.MethodBox>

        <S.NextPaymentDayLabel>다음 결제일 : {formatDayAsYYYYMMDD(paymentData.nextPaymentDate)}</S.NextPaymentDayLabel>
      </S.PaymentInfoWrapper>

      <S.Divider />

      <S.PaymentInfoWrapper>
        <S.PartTitle>결제 금액</S.PartTitle>
        <S.PriceBox>
          <S.PartLabel>{paymentData.planName}</S.PartLabel>
          <S.PartLabel>{paymentData.basePrice.toLocaleString()} KRW</S.PartLabel>
        </S.PriceBox>
        <S.PriceBox>
          <S.PartLabel>
            적용된 할인 |{' '}
            <SolidTag
              label={'기본 적용 할인'}
              color='blue'
            />{' '}
            <SolidTag
              label={'회원 등급 할인'}
              color='blue'
            />
          </S.PartLabel>
          <S.BaseDiscountAmount>-{paymentData.baseDiscountAmount.toLocaleString()} KRW</S.BaseDiscountAmount>
        </S.PriceBox>
        <S.PriceBox>
          <S.PartLabel>
            적용된 쿠폰 |{' '}
            {paymentData.couponName && (
              <SolidTag
                label={paymentData.couponName}
                color='blue'
              />
            )}
          </S.PartLabel>
          <S.BaseDiscountAmount>
            -{paymentData.couponDiscountAmount ? paymentData.couponDiscountAmount.toLocaleString() : '0'} KRW
          </S.BaseDiscountAmount>
        </S.PriceBox>
      </S.PaymentInfoWrapper>

      <S.Divider />

      <S.PriceBox>
        <S.PartTitle>결제 및 총합</S.PartTitle>
        <S.TotalPriceBox>
          {' '}
          <S.TotalPrice>{paymentData.amount.toLocaleString()}원</S.TotalPrice>
          <S.TotalPriceKrw>KRW / 월</S.TotalPriceKrw>
        </S.TotalPriceBox>
      </S.PriceBox>

      <S.Dividerr />

      <S.NotificationBox>
        <S.Notification>• 결제 관련한 자세한 내용은 결제약관 및 정책을 참고해주세요.</S.Notification>
        <S.Notification>• 추가적인 문의사항은 oncognier@gmail.com을 이용해주세요. </S.Notification>
      </S.NotificationBox>
    </S.PaymentDetailContainer>
  );
};
