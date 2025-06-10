// 답변 제출
export const submitDailyAnswerData = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
};

export const submitDailyAnswerEmptyFieldError = {
  code: 'EMTPY_FILED',
  message: '요청 값이 비어있습니다.',
};

export const submitDailyAnswerLengthExceededError = {
  code: 'ANSWER_LENGTH_EXCEEDED',
  message: '답변은 100자 이하여야 합니다.',
};
