export const verifyPaymentSuccess = {
  code: 'SUCCESS',
  message: '결제 인증 정보 조회에 성공했습니다.',
  result: {
    email: 'admin@cogroom.com',
    phoneNumber: '010-1234-1234',
    name: '코그룸',
    paymentHistoryId: 1,
    finalPrice: 10000.0,
    planName: '월간 프리미엄',
  },
};

export const verifyPaymentError = {
  code: 'EMPTY_FILED_ERROR',
  message: '결제 인증 정보 조회에 실패했습니다.',
};
