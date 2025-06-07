import { END_POINTS_V1 } from '@/constants/api';
import { UserSummaryResponse } from '@/types/member';

import { axiosInstance } from './axios/axiosInstance';

const getUserSummary = async () => {
  const { data } = await axiosInstance.get<UserSummaryResponse>(END_POINTS_V1.MEMBERS.SUMMARY);

  return data.result;
};

export const memberApi = {
  getUserSummary,
};
