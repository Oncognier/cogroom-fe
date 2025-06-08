import { ApiResponse } from './api';

export interface UserSummaryResponse extends ApiResponse {
  result: {
    nickname: string;
    imageUrl: string;
  };
}

export interface UserInfoResponse extends ApiResponse {
  result: {
    email: string;
    nickname: string;
    imageUrl: string;
    phoneNumber: string;
    description: string;
  };
}

export interface EditUserInfoRequest {
  email: string;
  nickname: string;
  imageUrl?: string;
  phoneNumber?: string;
  description?: string;
}
