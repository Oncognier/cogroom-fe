import { MOCK_IMAGE } from '@/mocks/constants/mockAssets';

export const getUserProfileSuccess = {
  code: 'SUCCESS',
  message: '사용자 정보 조회(Info)에 성공했습니다.',
  result: {
    memberId: 0,
    nickname: '다른 사용자',
    profileUrl: MOCK_IMAGE.MALE_PROFILE,
    description: '자기소개',
  },
};
