export const editDailyAnswerSuccess = {
  code: 'SUCCESS',
  message: '데일리 답변 수정에 성공했습니다.',
};

export const editDailyAnswerError_EmptyField = {
  code: 'ANSWER_NOTBLANK_ERROR',
  message: '한 글자라도 적어주세요',
};

export const editDailyAnswerError_LengthExceeded = {
  code: 'ANSWER_SIZE_ERROR',
  message: '내용을 조금만 줄여볼까요?',
};

export const editDailyAnswerError_TimeExpired = {
  code: 'ANSWER_TIME_EXPIRED',
  message: '앗.. 자정이 지나 수정할 수 없어요',
};
