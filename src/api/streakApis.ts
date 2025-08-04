import { END_POINTS_V1 } from '@/constants/api';
import { StreakCalendarResponse, StreakDaysResponse } from '@/types/streak';

import { axiosInstance } from './axios/axiosInstance';

export const getStreakCalendar = async () => {
  const { data } = await axiosInstance.get<StreakCalendarResponse>(END_POINTS_V1.STREAKS.CALENDAR);

  return data;
};

export const getStreakDays = async () => {
  const { data } = await axiosInstance.get<StreakDaysResponse>(END_POINTS_V1.STREAKS.DAILY_STREAK);

  return data;
};

export const streakApi = {
  getStreakCalendar,
  getStreakDays,
};
