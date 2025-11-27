import OutlinedTag from '@/components/atoms/OutlinedTag/OutlinedTag';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { Coupon } from '@/types/coupon';
import { formatDateTimeAsDotYYYYMMDDHHMM } from '@/utils/date/formatDay';

import * as S from './CouponRow.styled';

interface CouponRowProps {
  coupon: Coupon;
}

export default function CouponRow({ coupon }: CouponRowProps) {
  return (
    <S.CouponRow>
      <S.CouponCell width='7rem'>
        <SolidTag
          label={coupon.isUsed ? '사용완료' : '사용대기'}
          color={coupon.isUsed ? 'gray' : 'blue'}
          round
        />
      </S.CouponCell>
      <S.CouponCell width='12rem'>{coupon.name}</S.CouponCell>
      <S.CouponCell width='12rem'>-{coupon.discountValue.toLocaleString()}</S.CouponCell>
      <S.CouponCell width='12rem'>{coupon.code}</S.CouponCell>
      <S.CouponCell width='14rem'>{formatDateTimeAsDotYYYYMMDDHHMM(coupon.expiresAt)} 까지</S.CouponCell>
      <S.CouponCell width='12rem'>
        <OutlinedTag
          label='사용가능'
          color='blue'
        />
      </S.CouponCell>
    </S.CouponRow>
  );
}
