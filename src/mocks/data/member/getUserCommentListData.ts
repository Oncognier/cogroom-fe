export const getUserCommentListSuccess = {
  code: 'SUCCESS',
  message: '댓글 목록 조회에 성공했습니다.',
  result: {
    totalPages: 5,
    totalElements: 30,
    currentPage: 1,
    pageSize: 10,
    last: true,
    data: [
      {
        commentId: 1,
        comment: '댓글입니다. 길이이이이이이이이이이일게 하기',
        parentId: null,
        post: {
          postId: 1,
          title: '게시글이름인데 길게 지어보겠습니다아아아아아메리카노 좋아 좋아 좋아.',
        },
        createdAt: '2025-06-15T15:39:11',
        updatedAt: '2025-06-15T15:39:11',
      },
      {
        commentId: 2,
        comment: '댓글입니다.',
        parentId: null,
        post: {
          postId: 1,
          title: '게시글이름인데 길게 지어보겠습니다아아아아아메리카노 좋아 좋아 좋아.',
        },
        createdAt: '2025-06-15T15:39:11',
        updatedAt: '2025-06-15T15:39:11',
      },
      {
        commentId: 3,
        comment: '대댓글인데 좀 길게 만들어 보겠습니다람쥐며느리어카센타조개알탕먹고싶다',
        parentId: 1,
        post: {
          postId: 1,
          title: '게시글이름인데 길게 지어보겠습니다아아아아아메리카노 좋아 좋아 좋아.',
        },
        createdAt: '2025-06-15T15:39:11',
        updatedAt: '2025-06-15T15:39:11',
      },
      {
        commentId: 4,
        comment: '댓글입니다.',
        parentId: 1,
        post: {
          postId: 1,
          title: '게시글입니다.',
        },
        createdAt: '2025-06-15T15:39:11',
        updatedAt: '2025-06-15T15:39:11',
      },
    ],
  },
};
