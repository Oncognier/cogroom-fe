import { ApiResponse } from '@/types/api';

export interface StreakDateListResponse extends ApiResponse {
  result: {
    dailyStreak: number;
    streakDateList: string[];
  };
}
