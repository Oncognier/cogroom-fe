import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import { EditUserInfoRequest, UserInfoResponse, UserSummaryResponse } from '@/types/member';

import { axiosInstance } from './axios/axiosInstance';

const getUserSummary = async () => {
  const { data } = await axiosInstance.get<UserSummaryResponse>(END_POINTS_V1.MEMBERS.SUMMARY);

  return data.result;
};

const getUserInfo = async () => {
  const { data } = await axiosInstance.get<UserInfoResponse>(END_POINTS_V1.MEMBERS.INFO);

  return data.result;
};

const editUserInfo = async ({ email, nickname, imageUrl, phoneNumber, description }: EditUserInfoRequest) => {
  const { data } = await axiosInstance.patch<ApiResponse>(END_POINTS_V1.MEMBERS.INFO_EDIT, {
    email,
    nickname,
    imageUrl,
    phoneNumber,
    description,
  });

  return data;
};

export const memberApi = {
  getUserSummary,
  getUserInfo,
  editUserInfo,
};
