import type { AxiosResponse } from 'axios';

import { axiosInstance } from '@/api/axios/axiosInstance';
import { DailyAnswerRequest, DailyQuestionResponse } from '@/app/daily/_types/daily';
import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';

export const getDaily = async () => {
  const response = await axiosInstance.get<DailyQuestionResponse>(END_POINTS_V1.DAILY.QUESTIONS, {
    useAuth: true,
  });
  return response.data;
};

export const postDailyAnswer = async ({ answer }: DailyAnswerRequest) => {
  const response = await axiosInstance.post<DailyAnswerRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.DAILY.ANSWERS,
    { answer },
    { useAuth: true },
  );
  return response.data;
};

export const patchDailyAnswer = async ({ answer }: DailyAnswerRequest) => {
  const response = await axiosInstance.patch<DailyAnswerRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.DAILY.ANSWERS,
    { data: answer },
    { useAuth: true },
  );
  return response.data;
};

export const getStreakCalendar = async () => {
  const response = await axiosInstance.get(END_POINTS_V1.STREAKS.CALENDAR, {
    useAuth: true,
  });
  return response.data;
};
