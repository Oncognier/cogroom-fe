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
  UserCommunityRequest,
  UserSummaryResponse,
  WithdrawRequest,
  UserCommentListResponse,
  UserPostListResponse,
  UserProfileResponse,
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

const getUserProfile = async (memberId: string) => {
  const { data } = await axiosInstance.get<UserProfileResponse>(END_POINTS_V1.MEMBERS.PROFILE(memberId));

  return data.result;
};

const getUserDaily = async () => {
  const { data } = await axiosInstance.get<UserDailyResponse>(END_POINTS_V1.MEMBERS.DAILY);

  return data.result;
};

const getUserPost = async (params: UserCommunityRequest) => {
  const { data } = await axiosInstance.get<UserPostListResponse>(END_POINTS_V1.MEMBERS.POSTS, {
    params,
  });

  return data.result;
};

const deleteUserPost = async (postList: number[]) => {
  const { data } = await axiosInstance.delete<UserPostListResponse>(END_POINTS_V1.MEMBERS.POSTS, {
    data: { postList },
  });

  return data.result;
};

const getUserCommentList = async (params: UserCommunityRequest) => {
  const { data } = await axiosInstance.get<UserCommentListResponse>(END_POINTS_V1.MEMBERS.COMMENTS, {
    params,
  });

  return data.result;
};

const getUserLikePost = async (params: UserCommunityRequest) => {
  const { data } = await axiosInstance.get<UserPostListResponse>(END_POINTS_V1.MEMBERS.POSTS, {
    params,
  });

  return data.result;
};

const getUserLikeComment = async (params: UserCommunityRequest) => {
  const { data } = await axiosInstance.get<UserCommentListResponse>(END_POINTS_V1.MEMBERS.COMMENTS, {
    params,
  });

  return data.result;
};

const getUserSavePost = async (params: UserCommunityRequest) => {
  const { data } = await axiosInstance.get<UserPostListResponse>(END_POINTS_V1.MEMBERS.SAVES, {
    params,
  });

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
  getUserProfile,
  getUserDaily,
  getUserPost,
  getUserLikePost,
  getUserLikeComment,
  getUserSavePost,
  deleteUserPost,
  getUserCommentList,
  editUserInfo,
  checkNickname,
  withdraw,
};
