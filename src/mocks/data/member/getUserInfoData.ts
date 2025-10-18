import { MOCK_IMAGE } from '@/mocks/constants/mockAssets';

export const getUserInfoSuccess = {
  code: 'SUCCESS',
  message: '사용자 정보 조회(Info)에 성공했습니다.',
  result: {
    email: 'cogroom@gmail.com',
    nickname: '코그룸',
    imageUrl: MOCK_IMAGE.FEMALE_PROFILE,
    phoneNumber: '010-4112-2133',
    description: '',
  },
};
