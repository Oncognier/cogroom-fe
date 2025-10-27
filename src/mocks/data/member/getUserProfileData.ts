import { MOCK_IMAGE } from '@/mocks/constants/mockAssets';

export const getUserProfileSuccess = {
  code: 'SUCCESS',
  message: '사용자 정보 조회에 성공했습니다.',
  result: {
    memberId: 0,
    nickname: '다른 사용자',
    profileUrl: MOCK_IMAGE.MALE_PROFILE,
    description: '자기소개',
  },
};

export const getUserProfileError = {
  code: 'EMPTY_FILED_ERROR',
  message: '사용자 정보 조회에 실패했습니다.',
};
