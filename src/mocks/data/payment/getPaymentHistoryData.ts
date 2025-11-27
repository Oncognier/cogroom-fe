export const getPaymentHistorySuccess = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    data: [
      {
        paymentHistoryId: 1,
        amount: 9900,
        status: '정상',
        planId: 1,
        planName: '코그룸 프리미엄',
        paymentDate: '2024-01-15T09:30:00Z',
      },
      {
        paymentHistoryId: 2,
        amount: 99000,
        status: '정상',
        planId: 2,
        planName: '코그룸 프리미엄 연간',
        paymentDate: '2024-02-01T14:20:00Z',
      },
      {
        paymentHistoryId: 3,
        amount: 9900,
        status: '취소',
        planId: 1,
        planName: '코그룸 프리미엄',
        paymentDate: '2024-03-15T16:45:00Z',
      },
      {
        paymentHistoryId: 4,
        amount: 9900,
        status: '실패',
        planId: 1,
        planName: '코그룸 프리미엄',
        paymentDate: '2024-04-10T11:15:00Z',
      },
    ],
    nextCursor: 20,
    last: false,
    totalElements: 123,
  },
};

export const getPaymentHistoryEmpty = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    data: [],
    nextCursor: null,
    last: true,
    totalElements: 0,
  },
};

export const getPaymentHistoryError = {
  code: 'UNAUTHORIZED',
  message: '인증이 필요합니다.',
};
