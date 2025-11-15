export const getUserSubscriptionMonthly = {
  isSuccess: true,
  code: 'SUCCESS',
  message: '구독 정보 조회 성공',
  result: {
    planId: 1,
    name: '프리미엄 월 구독',
    nextPaymentDate: '2025-01-15T10:00:00Z',
    startedAt: '2024-12-15T10:00:00Z',
    duration: 30,
    isPaidBefore: true,
  },
};

export const getUserSubscriptionYearly = {
  isSuccess: true,
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    planId: 2,
    name: '프리미엄 플랜',
    nextPaymentDate: '2025-11-29T15:27:18',
    startedAt: '2025-10-29T15:27:23',
    duration: 0,
    isPaidBefore: false,
  },
};

export const getUserSubscriptionFree = {
  isSuccess: true,
  code: 'SUCCESS',
  message: '구독 정보 조회 성공',
  result: {
    planId: 3,
    name: '무료 플랜',
    nextPaymentDate: '',
    startedAt: '',
    duration: 0,
    isPaidBefore: true,
  },
};

export const getUserSubscriptionError = {
  isSuccess: false,
  code: 'SUBSCRIPTION_NOT_FOUND',
  message: '구독 정보가 없습니다.',
};
