export const getMemberListSuccess = {
  code: 'SUCCESS',
  message: '회원 리스트 조회에 성공했습니다.',
  result: {
    totalPages: 1,
    totalElements: 3,
    currentPage: 0,
    pageSize: 10,
    last: true,
    data: [
      {
        memberId: 1,
        nickname: 'a123123',
        email: 'thsgur1212@gmail.com',
        imageUrl: null,
        createdAt: '2025-08-03T17:43:45',
        memberRole: 'USER',
      },
      {
        memberId: 2,
        nickname: 'a123123',
        email: 'thsgur1212@naver.com',
        imageUrl: null,
        createdAt: '2025-08-02T17:43:45',
        memberRole: 'ADMIN',
      },
      {
        memberId: 3,
        nickname: '손혁',
        email: 'thsgur1212@naver.com',
        imageUrl: 'https://cdn.cogroom.com/PROFILE/6_test-2025-05-27-101511.png',
        createdAt: '2025-08-01T17:43:45',
        memberRole: 'CONTENT_PROVIDER',
      },
    ],
  },
};
