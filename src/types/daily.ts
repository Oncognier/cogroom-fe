import { ApiResponse } from '@/types/api';

export interface DailyQuestionResponse extends ApiResponse {
  result: {
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
