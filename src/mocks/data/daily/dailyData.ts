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

export const dailyDataNotFoundError = {
  code: 'DAILY_QUESTION_NOT_FOUND',
  message: '데일리 질문을 찾을 수 없습니다.',
};

export const dailyDataMemberNotFoundError = {
  code: 'MEMBER_NOT_FOUND',
  message: '사용자를 찾을 수 없습니다.',
};

export const dailyDataServerError = {
  code: 'INTERNAL_SERVER_ERROR',
  message: '서버 오류가 발생했습니다.',
};

// 답변 제출
export const postDailyAnswerData = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
};

export const postDailyAnswerError = {
  code: 'ALREADY_ANSWERED',
  message: '이미 답변이 존재합니다.',
};

export const postDailyAnswerEmptyFieldError = {
  code: 'EMTPY_FILED',
  message: '요청 값이 비어있습니다.',
};

export const postDailyAnswerMemberNotFoundError = {
  code: 'MEMBER_NOT_FOUND',
  message: '사용자를 찾을 수 없습니다.',
};

export const postDailyAnswerServerError = {
  code: 'INTERNAL_SERVER_ERROR',
  message: '서버 오류가 발생했습니다.',
};

// 답변 수정
export const patchDailyAnswerData = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
};

export const patchDailyAnswerError = {
  code: 'ANSWER_NOT_FOUND',
  message: '데일리 답변을 찾을 수 없습니다.',
};

export const patchDailyAnswerEmptyFieldError = {
  code: 'EMTPY_FILED',
  message: '요청 값이 비어있습니다.',
};

export const patchDailyAnswerMemberNotFoundError = {
  code: 'MEMBER_NOT_FOUND',
  message: '사용자를 찾을 수 없습니다.',
};

export const patchDailyAnswerServerError = {
  code: 'INTERNAL_SERVER_ERROR',
  message: '서버 오류가 발생했습니다.',
};

// 스트릭 캘린더 조회
export const streakCalendarData = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    streakDateList: ['2025-06-06', '2025-06-05', '2025-06-04', '2025-06-03', '2025-05-31', '2025-05-26'],
  },
};

export const streakCalendarMemberNotFoundError = {
  code: 'MEMBER_NOT_FOUND',
  message: '사용자를 찾을 수 없습니다.',
};

export const streakCalendarServerError = {
  code: 'INTERNAL_SERVER_ERROR',
  message: '서버에 오류가 발생했습니다.',
};
