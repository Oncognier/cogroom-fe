export const getUserSaveListSuccess = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    data: [
      {
        postId: 1,
        title: '글 제목입니다',
        thumbnailUrl: 'https://cdn.cogroom.com/PROFILE/27_IMG_3328.jpeg',
        category: {
          categoryId: 1,
          name: '데일리 공유',
        },
        myStatus: {
          isLiked: true,
          isCommented: false,
          isSaved: true,
        },
        viewCount: 162,
        likeCount: 14,
        commentCount: 14,
        saveCount: 14,
        createdAt: '2025-08-21T12:34:56Z',
        updatedAt: '2025-08-21T12:34:56Z',
      },
    ],
    totalPages: 1,
    totalElements: 2,
    currentPage: 0,
    pageSize: 10,
    last: true,
  },
};
