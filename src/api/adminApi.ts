import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import {
  CreateDailyQuestionsRequest,
  DailyQuestionsRequest,
  DeleteMemberRequest,
  MemberListRequest,
  MemberListResponse,
  MemberDailyQuestionsResponse,
  DailyQuestionsResponse,
  ChangeMemberRoleRequest,
} from '@/types/admin';
import { ApiResponse } from '@/types/api';

import { axiosInstance } from './axios/axiosInstance';

const getMemberList = async (params: MemberListRequest) => {
  const { data } = await axiosInstance.get<MemberListResponse>(END_POINTS_V1.ADMIN.MEMBERS.LIST, {
    params,
  });

  return data.result;
};

const getMemberDailyQuestions = async ({ memberId, params }: { memberId: string; params: DailyQuestionsRequest }) => {
  const { data } = await axiosInstance.get<MemberDailyQuestionsResponse>(END_POINTS_V1.ADMIN.MEMBERS.DAILY(memberId), {
    params,
  });

  return data.result;
};

const getDailyQuestions = async (params: DailyQuestionsRequest) => {
  const { data } = await axiosInstance.get<DailyQuestionsResponse>(END_POINTS_V1.ADMIN.DAILY.QUESTIONS, {
    params,
  });

  return data.result;
};

export const changeMemberRole = async ({ memberId, role }: ChangeMemberRoleRequest) => {
  const { data } = await axiosInstance.patch<ApiResponse>(
    END_POINTS_V1.ADMIN.MEMBERS.CHANGE_ROLE(memberId),
    {},
    {
      params: { role },
    },
  );

  return data;
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
  getDailyQuestions,
  changeMemberRole,
  deleteMember,
  createDailyQuestions,
};
