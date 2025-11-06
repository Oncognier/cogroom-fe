export const getPlanInfoSuccess = {
  code: 'SUCCESS',
  message: '플랜 정보 조회에 성공했습니다.',
  result: {
    planId: 1,
    name: '연간 프리미엄',
    basePrice: 178800.0,
    baseDiscountAmount: 84100.0,
    baseDiscountRate: 46.0,
    finalPrice: 94800.0,
    monthlyPrice: 7900.0,
    billingCycle: 'YEARLY',
    description:
      '스트릭 부활권 월 2회//데일리 답변 글자수 <u>1,000자</u>//물방울 달력 <u>무한 조회</u> 가능//데일리 답변 <u>무한 수정</u> 가능//데일리 답변 <u>무한 공유</u> 가능//프리미엄 <u>전용 칼럼글</u> 조회 가능//(준비중) 커뮤니티 프로필 꾸미기//(준비중) 물방울 포인트적립 1.5배',
    status: 'ACTIVE',
    paymentHistoryId: 1,
    expiresAt: '2025-09-18 16:10:35',
    isSubscribed: false,
  },
};

export const getPlanInfoError = {
  code: 'EMPTY_FILED_ERROR',
  message: '플랜 정보 조회에 실패했습니다.',
};
