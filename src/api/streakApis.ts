import { END_POINTS_V1 } from '@/constants/api';
import { AxiosMeta } from '@/types/api';
import { StreakCalendarResponse, StreakDaysResponse } from '@/types/streak';

import { axiosInstance } from './axios/axiosInstance';

/** 스트릭 캘린더 기록 조회 */
const getStreakCalendar = async (meta?: AxiosMeta) => {
  const { data } = await axiosInstance.get<StreakCalendarResponse>(END_POINTS_V1.STREAKS.CALENDAR, { meta });
  return data;
};

/** 스트릭 연속 일수 조회 */
const getStreakDays = async (meta?: AxiosMeta) => {
  const { data } = await axiosInstance.get<StreakDaysResponse>(END_POINTS_V1.STREAKS.DAILY_STREAK, { meta });
  return data;
};

export const streakApi = {
  getStreakCalendar,
  getStreakDays,
};
