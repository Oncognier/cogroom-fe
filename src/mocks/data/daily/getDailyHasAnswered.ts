export const getDailyHasAnswered_NotAnswered = {
  code: 'SUCCESS',
  message: '데일리 질문 조회(답변 전)에 성공했습니다.',
  result: {
    hasAnswered: false,
  },
};

export const getDailyHasAnswered_Answered = {
  code: 'SUCCESS',
  message: '데일리 질문 조회(답변 후)에 성공했습니다.',
  result: {
    hasAnswered: true,
  },
};
