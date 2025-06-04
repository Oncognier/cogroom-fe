export const accessToken = 'cogroomAccessToken';
export const refreshToken = 'cogroomRefreshToken';

export const postLogInMockResponse = {
  code: 1000,
  message: '로그인에 성공했습니다.',
  result: {
    needSignup: false,
  },
};

export const postLogInMockErrorResponse = {
  code: 1001,
  message: '로그인에 실패했습니다.',
};
