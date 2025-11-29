export const getCouponListSuccess = {
  code: 'SUCCESS',
  message: '쿠폰 목록 조회에 성공했습니다.',
  result: {
    coupons: [
      {
        id: 1, // 쿠폰 고유 ID
        name: '첫 구독 할인쿠폰', // 쿠폰명
        code: '1-2-3-4-5-6-7-8', // 쿠폰 코드 (대시 형식)
        discountType: 'AMOUNT', // 할인 타입 (정액 할인)
        discountValue: 5000, // 할인 값 (5,000원)
        minOrderAmount: 0, // 최소 주문 금액
        maxDiscountAmount: null, // 최대 할인 금액 (정액 할인은 null)
        expiresAt: '2024-12-31T23:59:00Z', // 사용기한
        usedAt: null, // 사용 일시 (사용 전엔 null)
        isUsed: false, // 쿠폰 상태 (미사용)
      },
      {
        id: 2,
        name: '친구 초대 할인', // 쿠폰명
        code: '9-9-9-9-9-9-9-9', // 쿠폰 코드 (대시 형식)
        discountType: 'AMOUNT', // 할인 타입 (정액 할인)
        discountValue: 5000, // 할인 값 (5,000원)
        minOrderAmount: 30000, // 최소 주문 금액 (30,000원 이상)
        maxDiscountAmount: null, // 최대 할인 금액 (정액 할인은 null)
        expiresAt: '2025-01-15T14:30:00Z', // 사용기한
        usedAt: null, // 사용 일시 (미사용)
        isUsed: false, // 쿠폰 상태 (미사용)
      },
    ],
    totalCount: 2, // 총 쿠폰 개수
  },
};

export const getCouponListEmpty = {
  code: 'SUCCESS',
  message: '쿠폰 목록 조회에 성공했습니다.',
  result: {
    coupons: [],
    totalCount: 0,
  },
};

export const getCouponListError = {
  code: 'UNAUTHORIZED',
  message: '인증이 필요합니다.',
};
