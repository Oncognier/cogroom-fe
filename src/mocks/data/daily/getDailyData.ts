export const getDailySuccess_NotAnswered = {
  code: 'SUCCESS',
  message: '데일리 질문 조회(답변 전)에 성공했습니다.',
  result: {
    questionId: 4,
    assignedQuestionId: 4,
    question:
      '오늘의 감정은 어떠세요? 라고 말하신다면 대답해드리는게 인지 상정 이 세계의 파괴를 막기 위해 이 세계의 평화를 지키기 위해',
  },
};

export const getDailySuccess_Answered = {
  code: 'SUCCESS',
  message: '데일리 질문 조회(답변 후)에 성공했습니다.',
  result: {
    questionId: 14,
    assignedQuestionId: 14,
    question:
      '오늘의 감정은 어떠세요? 라고 말하신다면 대답해드리는게 인지 상정 이 세계의 파괴를 막기 위해 이 세계의 평화를 지키기 위해',
    answer: '감사합니다.',
  },
};
