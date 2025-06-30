import type { AxiosResponse } from 'axios';

import { axiosInstance } from '@/api/axios/axiosInstance';
import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import { DailyAnswerRequest, DailyHasAnsweredResponse, DailyQuestionResponse } from '@/types/daily';

const getDaily = async () => {
  const { data } = await axiosInstance.get<DailyQuestionResponse>(END_POINTS_V1.DAILY.QUESTIONS, {
    useAuth: true,
  });
  return data;
};

const getDailyHasAnswered = async () => {
  const { data } = await axiosInstance.get<DailyHasAnsweredResponse>(END_POINTS_V1.DAILY.HAS_ANSWERED, {
    useAuth: true,
  });
  return data;
};

const submitDailyAnswer = async ({ assignedQuestionId, answer }: DailyAnswerRequest) => {
  const { data } = await axiosInstance.post<DailyAnswerRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.DAILY.ANSWERS,
    { assignedQuestionId, answer },
    { useAuth: true },
  );
  return data;
};

const editDailyAnswer = async ({ assignedQuestionId, answer }: DailyAnswerRequest) => {
  const { data } = await axiosInstance.patch<DailyAnswerRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.DAILY.ANSWERS,
    { assignedQuestionId, answer },
    { useAuth: true },
  );
  return data;
};

export const dailyApi = {
  getDaily,
  submitDailyAnswer,
  editDailyAnswer,
  getDailyHasAnswered,
};
