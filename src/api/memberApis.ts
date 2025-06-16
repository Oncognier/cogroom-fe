import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import { EditUserInfoRequest, UserDailyResponse, UserInfoResponse, UserSummaryResponse } from '@/types/member';

import { axiosInstance } from './axios/axiosInstance';

export const getUserSummary = async (accessToken?: string) => {
  const { data } = await axiosInstance.get(END_POINTS_V1.MEMBERS.SUMMARY, {
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined,
    useAuth: !accessToken,
  });

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

export const memberApi = {
  getUserSummary,
  getUserInfo,
  getUserDaily,
  editUserInfo,
};
