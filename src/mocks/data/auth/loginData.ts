export const mockAccessToken = 'cogroomAccessToken';
export const mockRefreshToken = 'cogroomRefreshToken';

export const loginSuccess_NewUser = {
  code: '1000',
  message: '로그인에 성공했습니다.',
  result: {
    socialUserInfo: {
      provider: 'KAKAO',
      providerId: '4281330880',
      email: 'cogroom@naver.com',
      nickname: '코그룸',
    },
    needSignup: true,
  },
};

export const loginSuccess_ExistingUser = {
  code: '1000',
  message: '로그인에 성공했습니다.',
  result: {
    needSignup: false,
  },
};

export const loginError = {
  code: '1001',
  message: '로그인에 실패했습니다.',
};
