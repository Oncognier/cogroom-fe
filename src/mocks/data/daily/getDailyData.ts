// 질문 및 스트릭 정보 조회 (답변 전 dailyDataNotAnswered, 답변 후 dailyDataAnswered)
export const dailyDataNotAnswered = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    questionId: 4,
    assignedQuestionId: 4,
    question:
      '오늘의 감정은 어떠세요? 라고 말하신다면 대답해드리는게 인지 상정 이 세계의 파괴를 막기 위해 이 세계의 평화를 지키기 위해',
  },
};

export const dailyDataAnswered = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    questionId: 14,
    assignedQuestionId: 14,
    question:
      '오늘의 감정은 어떠세요? 라고 말하신다면 대답해드리는게 인지 상정 이 세계의 파괴를 막기 위해 이 세계의 평화를 지키기 위해',
    answer: '감사합니다.',
  },
};
