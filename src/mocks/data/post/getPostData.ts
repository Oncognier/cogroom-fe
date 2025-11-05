import { MOCK_IMAGE } from '@/mocks/constants/mockAssets';

export const getPostSuccess = {
  code: 'SUCCESS',
  message: '게시글 상세 조회에 성공했습니다.',
  result: {
    postId: 123,
    title: '요즘 “꾸준함”을 유지하기가 너무 어렵네요',
    content:
      '요즘 부쩍 집중이 잘 안 되고, 시작한 일들을 끝까지 이어가는 게 쉽지 않아요. \n그래도 하루에 10분이라도 기록을 남기면 조금은 달라질까요? 🕯️',
    viewCount: 1489,
    likeCount: 172,
    commentCount: 38,
    saveCount: 29,
    createdAt: '2025-10-17T22:18:08.544Z',
    updatedAt: '2025-10-17T23:05:40.000Z',
    isMine: false,
    isAnonymous: false,
    category: {
      categoryId: 2,
      name: '사색/고민',
    },
    author: {
      authorId: 47,
      displayName: '하루기록',
      isAnonymous: false,
      profileUrl: MOCK_IMAGE.FEMALE_PROFILE,
    },
    myStatus: {
      isLiked: true,
      isCommented: true,
      isSaved: false,
    },
    daily: {
      question: '오늘 나를 힘들게 한 생각은 무엇이었나요?',
      answer: '“잘해야 한다”는 압박감이었던 것 같아요. 완벽하지 않아도 괜찮다고 스스로에게 말해주려고 합니다.',
    },
  },
};

export const getPostError = {
  code: 'EMPTY_FILED_ERROR',
  message: '게시글 상세 조회에 실패했습니다.',
};
