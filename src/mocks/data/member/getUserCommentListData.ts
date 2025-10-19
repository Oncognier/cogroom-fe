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
        commentId: 101,
        comment: '요즘 이런 글 보니까 마음이 조금은 편해지는 것 같아요 😊',
        parentId: null,
        post: {
          postId: 501,
          title: '오늘 하루, 나 자신에게 조금 더 다정해지기',
        },
        createdAt: '2025-10-15T13:42:10Z',
        updatedAt: '2025-10-15T13:42:10Z',
      },
      {
        commentId: 102,
        comment: '저도 같은 생각이에요! 꾸준히 한다는 게 참 어렵네요 😅',
        parentId: null,
        post: {
          postId: 502,
          title: '꾸준함의 힘을 믿어야 하는 이유',
        },
        createdAt: '2025-10-14T18:20:05Z',
        updatedAt: '2025-10-14T18:20:05Z',
      },
      {
        commentId: 103,
        comment: '대댓글로 남깁니다! 글에서 진심이 느껴져서 너무 좋았어요 💛',
        parentId: 101,
        post: {
          postId: 501,
          title: '오늘 하루, 나 자신에게 조금 더 다정해지기',
        },
        createdAt: '2025-10-15T15:12:32Z',
        updatedAt: '2025-10-15T15:12:32Z',
      },
      {
        commentId: 104,
        comment: '이 문장을 읽는 순간 울컥했어요. “괜찮지 않아도 괜찮다”는 말이 이렇게 따뜻하게 들릴 줄이야...',
        parentId: null,
        post: {
          postId: 503,
          title: '괜찮지 않아도 괜찮은 날들에 대하여 🌿',
        },
        createdAt: '2025-10-13T21:08:59Z',
        updatedAt: '2025-10-13T21:08:59Z',
      },
      {
        commentId: 105,
        comment: '대댓글이에요! 저도 그 문장에서 멈춰서 몇 번을 다시 읽었어요. 힘이 되는 글이었어요 🙏',
        parentId: 104,
        post: {
          postId: 503,
          title: '괜찮지 않아도 괜찮은 날들에 대하여 🌿',
        },
        createdAt: '2025-10-13T21:22:40Z',
        updatedAt: '2025-10-13T21:22:40Z',
      },
      {
        commentId: 106,
        comment: '짧지만 진심이 느껴지는 글이네요. 덕분에 하루가 따뜻해졌어요 ☕️',
        parentId: null,
        post: {
          postId: 504,
          title: '작은 위로가 필요한 시간',
        },
        createdAt: '2025-10-12T10:05:15Z',
        updatedAt: '2025-10-12T10:05:15Z',
      },
    ],
  },
};
