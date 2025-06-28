import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import {
  CreateDailyQuestionsRequest,
  MemberDailyQuestionsRequest,
  DeleteMemberRequest,
  MemberListRequest,
  MemberListResponse,
  MemberDailyQuestionsResponse,
} from '@/types/admin';
import { ApiResponse } from '@/types/api';

import { axiosInstance } from './axios/axiosInstance';

const getMemberList = async (params: MemberListRequest) => {
  const { data } = await axiosInstance.get<MemberListResponse>(END_POINTS_V1.ADMIN.MEMBERS.LIST, {
    params,
  });

  return data.result;
};

const getMemberDailyQuestions = async ({
  memberId,
  params,
}: {
  memberId: string;
  params: MemberDailyQuestionsRequest;
}) => {
  const { data } = await axiosInstance.get<MemberDailyQuestionsResponse>(END_POINTS_V1.ADMIN.MEMBERS.DAILY(memberId), {
    params,
  });

  return data.result;
};

const deleteMember = async ({ memberIdList }: DeleteMemberRequest) => {
  const { data } = await axiosInstance.delete<DeleteMemberRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.ADMIN.MEMBERS.DELETE,
    {
      data: { memberIdList },
    },
  );

  return data;
};

const createDailyQuestions = async (request: CreateDailyQuestionsRequest) => {
  const { data } = await axiosInstance.post<CreateDailyQuestionsRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.ADMIN.DAILY.QUESTIONS_CREATE,
    request,
  );

  return data;
};

export const adminApi = {
  getMemberList,
  getMemberDailyQuestions,
  deleteMember,
  createDailyQuestions,
};
