export interface DailyQuestionResponse {
  code: string;
  message: string;
  result: {
    streakDays: number;
    questionId: number;
    question: string;
    answer?: string;
  };
}

export interface DailyAnswerRequest {
  answer: string;
}

export interface StreakCalendarResponse {
  code: string;
  message: string;
  result: {
    streakDateList: string[];
  };
}
