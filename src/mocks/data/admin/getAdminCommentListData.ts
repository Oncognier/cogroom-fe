import { MOCK_IMAGE } from '@/mocks/constants/mockAssets';

export const getAdminCommentListSuccess = {
  code: 'SUCCESS',
  message: '어드민 댓글 리스트 조회에 성공했습니다.',
  result: {
    totalPages: 1,
    totalElements: 3,
    currentPage: 0,
    pageSize: 10,
    last: true,
    data: [
      {
        commentId: 1,
        comment: '댓글 내용',
        status: 'ACTIVE',
        post: {
          postId: 1,
          title: '글 제목입니다',
        },
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
        commentId: 2,
        comment: '댓글 내용',
        status: 'DELETED_BY_USER',
        post: {
          postId: 1,
          title: '글 제목입니다',
        },
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
        commentId: 3,
        comment: '댓글 내용',
        status: 'DELETED_BY_ADMIN',
        post: {
          postId: 1,
          title: '글 제목입니다',
        },
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
        commentId: 4,
        comment: '댓글 내용',
        status: 'USER_WITHDRAWN',
        post: {
          postId: 1,
          title: '글 제목입니다',
        },
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
