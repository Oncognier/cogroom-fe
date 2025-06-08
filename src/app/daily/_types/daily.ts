import { ApiResponse } from '@/types/api';

export interface DailyQuestionResponse extends ApiResponse {
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

export interface StreakCalendarResponse extends ApiResponse {
  result: {
    streakDateList: string[];
  };
}
