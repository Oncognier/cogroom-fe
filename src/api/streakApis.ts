import { END_POINTS_V1 } from '@/constants/api';
import { StreakCalendarResponse, StreakDaysResponse } from '@/types/streak';

import { axiosInstance } from './axios/axiosInstance';

const getStreakCalendar = async () => {
  const { data } = await axiosInstance.get<StreakCalendarResponse>(END_POINTS_V1.STREAKS.CALENDAR, { useAuth: true });
  return data;
};

const getStreakDays = async () => {
  const { data } = await axiosInstance.get<StreakDaysResponse>(END_POINTS_V1.STREAKS.DAILY_STREAK, { useAuth: true });
  return data;
};

export const streakApi = {
  getStreakCalendar,
  getStreakDays,
};
