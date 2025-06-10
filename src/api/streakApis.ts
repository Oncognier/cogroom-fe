import { END_POINTS_V1 } from '@/constants/api';
import { StreakDateListResponse } from '@/types/streak';

import { axiosInstance } from './axios/axiosInstance';

export const getStreakDateList = async () => {
  const { data } = await axiosInstance.get<StreakDateListResponse>(END_POINTS_V1.STREAKS.CALENDAR, { useAuth: true });
  return data;
};
