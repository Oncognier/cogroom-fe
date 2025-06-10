import { ApiResponse } from '@/types/api';

export interface StreakDateListResponse extends ApiResponse {
  result: {
    streakDateList: string[];
  };
}
