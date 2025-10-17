import type { AxiosResponse } from 'axios';

import { axiosInstance } from '@/api/axios/axiosInstance';
import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse, AxiosMeta } from '@/types/api';
import { DailyAnswerRequest, DailyHasAnsweredResponse, DailyQuestionResponse } from '@/types/daily';

/** 데일리 질문 조회 */
const getDailyQuestions = async (meta?: AxiosMeta) => {
  const { data } = await axiosInstance.get<DailyQuestionResponse>(END_POINTS_V1.DAILY.QUESTIONS, { meta });
  return data.result;
};

/** 이전 답변 존재 여부 조회 */
const getDailyHasAnswered = async (meta?: AxiosMeta) => {
  const { data } = await axiosInstance.get<DailyHasAnsweredResponse>(END_POINTS_V1.DAILY.HAS_ANSWERED, { meta });
  return data.result;
};

/** 데일리 답변 등록 */
const submitDailyAnswer = async ({ assignedQuestionId, answer }: DailyAnswerRequest) => {
  const { data } = await axiosInstance.post<DailyAnswerRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.DAILY.ANSWERS,
    { assignedQuestionId, answer },
  );
  return data;
};

/** 데일리 답변 수정 */
const editDailyAnswer = async ({ assignedQuestionId, answer }: DailyAnswerRequest) => {
  const { data } = await axiosInstance.patch<DailyAnswerRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.DAILY.ANSWERS,
    { assignedQuestionId, answer },
  );
  return data;
};

export const dailyApi = {
  getDailyQuestions,
  getDailyHasAnswered,
  submitDailyAnswer,
  editDailyAnswer,
};
