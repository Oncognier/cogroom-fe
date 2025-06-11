import { ApiResponse } from '@/types/api';

export interface DailyQuestionResponse extends ApiResponse {
  result: {
    streakDays: number;
    questionId: number;
    assignedQuestionId: number;
    question: string;
    answer?: string;
  };
}

export interface DailyAnswerRequest {
  assignedQuestionId: number;
  answer: string;
}
