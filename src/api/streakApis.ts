import { END_POINTS_V1 } from '@/constants/api';
import { PrefetchMeta } from '@/types/api';
import { StreakCalendarResponse, StreakDaysResponse } from '@/types/streak';

import { axiosInstance } from './axios/axiosInstance';

export const getStreakCalendar = async (meta?: PrefetchMeta) => {
  const { data } = await axiosInstance.get<StreakCalendarResponse>(END_POINTS_V1.STREAKS.CALENDAR, {
    useAuth: true,
    meta,
  });
  return data;
};

export const getStreakDays = async (meta?: PrefetchMeta) => {
  const { data } = await axiosInstance.get<StreakDaysResponse>(END_POINTS_V1.STREAKS.DAILY_STREAK, {
    useAuth: true,
    meta,
  });
  return data;
};

export const streakApi = {
  getStreakCalendar,
  getStreakDays,
};
