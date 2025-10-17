import { MOCK_IMAGE } from '@/mocks/constants/mockAssets';

export const getAdminPostListSuccess = {
  code: 'SUCCESS',
  message: '어드민 게시글 리스트 조회에 성공했습니다.',
  result: {
    totalPages: 1,
    totalElements: 3,
    currentPage: 0,
    pageSize: 10,
    last: true,
    data: [
      {
        postId: 1,
        title: '글 제목입니다',
        status: 'ACTIVE',
        category: {
          categoryId: 1,
          name: '데일리 공유',
        },
        author: {
          authorId: 1,
          displayName: '코그니어1',
          isAnonymous: false,
          profileUrl: MOCK_IMAGE.MALE_PROFILE,
        },
        createdAt: '2025-08-21T12:34:56Z',
        updatedAt: '2025-08-21T12:34:56Z',
      },
      {
        postId: 2,
        title: '글 제목입니다',
        status: 'DELETED_BY_USER',
        category: {
          categoryId: 2,
          name: '사색/고민',
        },
        author: {
          authorId: 1,
          displayName: '코그니어1',
          isAnonymous: false,
          profileUrl: MOCK_IMAGE.MALE_PROFILE,
        },
        createdAt: '2025-08-21T12:34:56Z',
        updatedAt: '2025-08-21T12:34:56Z',
      },
      {
        postId: 3,
        title: '글 제목입니다',
        status: 'DELETED_BY_ADMIN',
        category: {
          categoryId: 3,
          name: '칼럼',
        },
        author: {
          authorId: 1,
          displayName: '코그니어1',
          isAnonymous: false,
          profileUrl: MOCK_IMAGE.MALE_PROFILE,
        },
        createdAt: '2025-08-21T12:34:56Z',
        updatedAt: '2025-08-21T12:34:56Z',
      },
      {
        postId: 4,
        title: '글 제목입니다',
        status: 'USER_WITHDRAWN',
        category: {
          categoryId: 1,
          name: '데일리 공유',
        },
        author: {
          authorId: 1,
          displayName: '코그니어1',
          isAnonymous: false,
          profileUrl: MOCK_IMAGE.MALE_PROFILE,
        },
        createdAt: '2025-08-21T12:34:56Z',
        updatedAt: '2025-08-21T12:34:56Z',
      },
    ],
  },
};
