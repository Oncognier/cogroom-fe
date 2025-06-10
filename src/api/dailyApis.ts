import type { AxiosResponse } from 'axios';

import { axiosInstance } from '@/api/axios/axiosInstance';
import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import { DailyAnswerRequest, DailyQuestionResponse } from '@/types/daily';

export const getDaily = async () => {
  const { data } = await axiosInstance.get<DailyQuestionResponse>(END_POINTS_V1.DAILY.QUESTIONS, {
    useAuth: true,
  });
  return data;
};

export const postDailyAnswer = async ({ answer }: DailyAnswerRequest) => {
  const { data } = await axiosInstance.post<DailyAnswerRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.DAILY.ANSWERS,
    { answer },
    { useAuth: true },
  );
  return data;
};

export const patchDailyAnswer = async ({ answer }: DailyAnswerRequest) => {
  const { data } = await axiosInstance.patch<DailyAnswerRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.DAILY.ANSWERS,
    { answer },
    { useAuth: true },
  );
  return data;
};
