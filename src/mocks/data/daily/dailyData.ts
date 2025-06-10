// 질문 및 스트릭 정보 조회 (답변 전 dailyDataNotAnswered, 답변 후 dailyDataAnswered)
export const dailyDataNotAnswered = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    streakDays: 10,
    questionId: 1,
    question:
      '오늘의 감정은 어떠세요? 라고 말하신다면 대답해드리는게 인지 상정 이 세계의 파괴를 막기 위해 이 세계의 평화를 지키기 위해',
  },
};

export const dailyDataAnswered = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    streakDays: 10,
    questionId: 1,
    question:
      '오늘의 감정은 어떠세요? 라고 말하신다면 대답해드리는게 인지 상정 이 세계의 파괴를 막기 위해 이 세계의 평화를 지키기 위해',
    answer: '감사합니다.',
  },
};

// 답변 제출
export const postDailyAnswerData = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
};

export const postDailyAnswerEmptyFieldError = {
  code: 'EMTPY_FILED',
  message: '요청 값이 비어있습니다.',
};

export const postDailyAnswerLengthExceededError = {
  code: 'ANSWER_LENGTH_EXCEEDED',
  message: '답변은 100자 이하여야 합니다.',
};

// 답변 수정
export const patchDailyAnswerData = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
};

export const patchDailyAnswerEmptyFieldError = {
  code: 'EMTPY_FILED',
  message: '요청 값이 비어있습니다.',
};

export const patchDailyAnswerLengthExceededError = {
  code: 'ANSWER_LENGTH_EXCEEDED',
  message: '답변은 100자 이하여야 합니다.',
};

