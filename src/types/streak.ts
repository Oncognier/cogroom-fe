import { ApiResponse } from '@/types/api';

export interface StreakCalendarResponse extends ApiResponse {
  result: {
    streakDateList: string[];
  };
}

export interface StreakDaysResponse extends ApiResponse {
  result: {
    streakDays: number;
  };
}
