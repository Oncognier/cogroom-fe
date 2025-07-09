import type { AxiosResponse } from 'axios';

import { axiosInstance } from '@/api/axios/axiosInstance';
import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse, PrefetchMeta } from '@/types/api';
import { DailyAnswerRequest, DailyHasAnsweredResponse, DailyQuestionResponse } from '@/types/daily';

export const getDailyQuestions = async (meta?: PrefetchMeta) => {
  const { data } = await axiosInstance.get<DailyQuestionResponse>(END_POINTS_V1.DAILY.QUESTIONS, {
    useAuth: true,
    meta,
  });

  return data.result;
};

export const getDailyHasAnswered = async (meta?: PrefetchMeta) => {
  const { data } = await axiosInstance.get<DailyHasAnsweredResponse>(END_POINTS_V1.DAILY.HAS_ANSWERED, {
    useAuth: true,
    meta,
  });
  return data.result;
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
  getDailyQuestions,
  submitDailyAnswer,
  editDailyAnswer,
  getDailyHasAnswered,
};
