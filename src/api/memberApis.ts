import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse, AxiosMeta } from '@/types/api';
import {
  CheckNicknameRequest,
  CheckNicknameResponse,
  EditUserInfoRequest,
  UserDailyResponse,
  UserDashboardResponse,
  UserInfoResponse,
  UserSummaryResponse,
  WithdrawRequest,
} from '@/types/member';

import { axiosInstance } from './axios/axiosInstance';

const getUserSummary = async (meta?: AxiosMeta) => {
  const { data } = await axiosInstance.get<UserSummaryResponse>(END_POINTS_V1.MEMBERS.SUMMARY, { meta });
  return data.result;
};

const getUserDashboard = async () => {
  const { data } = await axiosInstance.get<UserDashboardResponse>(END_POINTS_V1.MEMBERS.DASHBOARD);

  return data.result;
};

const getUserInfo = async () => {
  const { data } = await axiosInstance.get<UserInfoResponse>(END_POINTS_V1.MEMBERS.INFO);

  return data.result;
};

const getUserDaily = async () => {
  const { data } = await axiosInstance.get<UserDailyResponse>(END_POINTS_V1.MEMBERS.DAILY);

  return data.result;
};

const editUserInfo = async ({ email, nickname, imageUrl, phoneNumber, description }: EditUserInfoRequest) => {
  const { data } = await axiosInstance.patch<EditUserInfoRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.MEMBERS.INFO_EDIT,
    {
      email,
      nickname,
      imageUrl,
      phoneNumber,
      description,
    },
  );

  return data;
};

const checkNickname = async ({ nickname }: CheckNicknameRequest) => {
  const { data } = await axiosInstance.post<CheckNicknameRequest, AxiosResponse<CheckNicknameResponse>>(
    END_POINTS_V1.MEMBERS.CHECK_NICKNAME,
    { nickname },
  );

  return data.result;
};

const withdraw = async ({ reason }: WithdrawRequest) => {
  const { data } = await axiosInstance.delete<WithdrawRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.MEMBERS.WITHDRAW,
    {
      data: { reason },
    },
  );

  return data;
};

export const memberApi = {
  getUserSummary,
  getUserDashboard,
  getUserInfo,
  getUserDaily,
  editUserInfo,
  checkNickname,
  withdraw,
};
