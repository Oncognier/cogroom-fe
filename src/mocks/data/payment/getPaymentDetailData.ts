export const getPaymentDetailSuccess = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    planName: '코그룸 연간 프리미엄',
    paymentHistoryId: 1,
    status: 'PAID',
    memberId: 123,
    email: 'user@cogroom.com',
    paidAt: '2024-01-15T09:30:00Z',
    method: 'KAKAO_PAY',
    nextPaymentDate: '2025-01-15T09:30:00Z',
    basePrice: 12000,
    baseDiscountAmount: 2000,
    couponName: '신규 가입 쿠폰',
    couponDiscountAmount: 100,
    amount: 9900,
    cardCompanyName: '카카오페이',
  },
};

export const getPaymentDetailWithoutCoupon = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    planName: '코그룸 월간 프리미엄',
    paymentHistoryId: 2,
    status: 'PAID',
    memberId: 123,
    email: 'user@cogroom.com',
    paidAt: '2024-02-01T14:20:00Z',
    method: 'CARD',
    nextPaymentDate: '2024-03-01T14:20:00Z',
    basePrice: 12000,
    baseDiscountAmount: 2100,
    couponName: '',
    couponDiscountAmount: '',
    amount: 9900,
    cardCompanyName: '농협카드',
  },
};

export const getPaymentDetailFailed = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    planName: '코그룸 연간 프리미엄',
    paymentHistoryId: 3,
    status: 'FAILED',
    memberId: 123,
    email: 'user@cogroom.com',
    paidAt: '2024-03-15T16:45:00Z',
    method: 'CARD',
    nextPaymentDate: '2024-03-01T14:20:00Z',
    basePrice: 12000,
    baseDiscountAmount: 2100,
    couponName: '',
    couponDiscountAmount: '',
    amount: 9900,
    cardCompanyName: '신한카드',
  },
};

export const getPaymentDetailMemberNotFound = {
  code: 'MEMBER_NOT_FOUND_ERROR',
  message: '사용자를 찾을 수 없습니다.',
  result: null,
};

export const getPaymentDetailPaymentRecordNotFound = {
  code: 'PAYMENT_RECORD_NOT_FOUND',
  message: '결제 기록을 찾을 수 없습니다.',
  result: null,
};
