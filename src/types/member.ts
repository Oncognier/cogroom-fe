import { ApiResponse } from './api';

export type UserSummary = {
  nickname: string;
  imageUrl: string;
};

export interface UserSummaryResponse extends ApiResponse {
  result: UserSummary;
}

export type UserInfo = {
  email: string;
  nickname: string;
  imageUrl?: string;
  phoneNumber?: string;
  description?: string;
};

export interface UserInfoResponse extends ApiResponse {
  result: UserInfo;
}

export interface EditUserInfoRequest extends UserInfo {}
