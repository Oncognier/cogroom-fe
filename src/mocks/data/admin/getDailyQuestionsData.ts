export const getDailyQuestionsSuccess = {
  code: 'SUCCESS',
  message: '데일리 질문 목록 조회에 성공했습니다.',
  result: {
    totalPages: 4,
    totalElements: 19,
    currentPage: 0,
    pageSize: 5,
    last: false,
    data: [
      {
        questionId: 26,
        question: '111111',
        categories: ['뇌과학'],
        level: 'BASIC',
      },
      {
        questionId: 27,
        question: '1',
        categories: ['뇌과학'],
        level: 'BASIC',
      },
      {
        questionId: 24,
        question: '지치셨나요3?',
        categories: ['언어학', '컴퓨터공학'],
        level: 'NORMAL',
      },
      {
        questionId: 25,
        question: '지치셨나요?4',
        categories: ['언어학', '컴퓨터공학'],
        level: 'NORMAL',
      },
      {
        questionId: 23,
        question: '지치셨나요?2',
        categories: ['인류학', '언어학', '기타'],
        level: 'ADVANCED',
      },
    ],
  },
};
