export const accessToken = 'cogroomAccessToken';
export const refreshToken = 'cogroomRefreshToken';

export const postLoginMockResponse_ExistingUser = {
  code: 1000,
  message: '로그인에 성공했습니다.',
  result: {
    needSignup: false,
  },
};

export const postLoginMockResponse_NewUser = {
  code: 1000,
  message: '로그인에 성공했습니다.',
  result: {
    email: 'cogroom@gmail.com',
    nickname: 'cogroom',
    needSignup: true,
  },
};

export const postLoginMockErrorResponse = {
  code: 1001,
  message: '로그인에 실패했습니다.',
};
