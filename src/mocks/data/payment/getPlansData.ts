export const getPlansSuccess = {
  code: 'SUCCESS',
  message: '플랜 정보 전체 조회에 성공했습니다.',
  result: [
    {
      planId: 1,
      name: '월간 프리미엄',
      basePrice: 14900.0,
      baseDiscountAmount: 5000.0,
      baseDiscountRate: 33.0,
      finalPrice: 9900.0,
      monthlyPrice: 9900.0,
      billingCycle: 'MONTHLY',
      description:
        '스트릭 부활권 월 1회//데일리 답변 글자수 <u>400자</u>//물방울 달력 당월 조회 가능//데일리 답변 <u>무한 수정</u> 가능//데일리 답변 <u>무한 공유</u> 가능//프리미엄 <u>전용 칼럼글</u> 조회 가능//(준비중) 커뮤니티 프로필 꾸미기//(준비중) 물방울 포인트적립 1.2배',
      status: 'ACTIVE',
    },
    {
      planId: 2,
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
    },
    {
      planId: 3,
      name: '무료 플랜',
      basePrice: 0.0,
      baseDiscountAmount: 0.0,
      baseDiscountRate: 0.0,
      finalPrice: 0.0,
      monthlyPrice: 0.0,
      billingCycle: 'FREE',
      description:
        '스트릭 부활권 없음//데일리 답변 글자수 200자//물방울 달력 당월 조회 가능//데일리 답변 당일 수정 가능//데일리 답변 당일 공유 가능',
      status: 'ACTIVE',
    },
  ],
};
