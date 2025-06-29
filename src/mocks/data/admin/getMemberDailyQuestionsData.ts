export const getMemberDailyQuestionsSuccess = {
  code: 'SUCCESS',
  message: '회원별 데일리 질문 조회에 성공했습니다.',
  result: {
    totalPages: 1,
    totalElements: 3,
    currentPage: 0,
    pageSize: 10,
    last: true,
    data: [
      {
        assignedQuestionId: 1,
        nickname: '코그룸',
        imageUrl: null,
        question: '지금 가장 크게 느끼고 있는 감정은 어떤 감정 인가요?',
        level: 'BASIC',
        categories: ['심리학'],
        answeredAt: '2025-06-28T08:18:59.945Z',
      },
      {
        assignedQuestionId: 2,
        nickname: '코그룸',
        imageUrl: null,
        question: '지금 가장 크게 느끼고 있는 감정은 어떤 감정 인가요?',
        level: 'NORMAL',
        categories: ['뇌과학', '인류학'],
        answeredAt: '2025-06-28T08:18:59.945Z',
      },
      {
        assignedQuestionId: 3,
        nickname: '코그룸',
        imageUrl: null,
        question: '지금 가장 크게 느끼고 있는 감정은 어떤 감정 인가요?',
        level: 'ADVANCED',
        categories: ['심리학', '뇌과학', '철학', '인류학', '언어학', '컴퓨터공학'],
        answeredAt: '2025-06-28T08:18:59.945Z',
      },
    ],
  },
};

export const getMemberDailyQuestionsError = {
  code: 'MEMBER_NOT_FOUND_ERROR',
  message: '회원별 데일리 질문 조회에 실패했습니다.',
};
