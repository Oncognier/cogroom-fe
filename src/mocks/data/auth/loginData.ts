export const mockAccessToken = 'cogroomAccessToken';
export const mockRefreshToken = 'cogroomRefreshToken';

export const loginSuccess_NewUser = {
  code: 'SUCCESS',
  message: '로그인에 성공했습니다.',
  result: {
    socialUserInfo: {
      provider: 'NAVER',
      providerId: 'providerId',
      nickname: '복원빈',
      email: 'email@email.com',
    },
    signupToken: 'a0940685-signupToken',
    needSignup: true,
  },
};

export const loginSuccess_ExistingUser = {
  code: 'SUCCESS',
  message: '로그인에 성공했습니다.',
  result: {
    needSignup: false,
  },
};

export const loginError = {
  code: 'EMPTY_FILED_ERROR',
  message: '로그인에 실패했습니다.',
};
