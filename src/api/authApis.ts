import type { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';

import {
  LoginRequest,
  LoginResponse,
  SendEmailRequest,
  SignupRequest,
  GetEmailStatusRequest,
  GetEmailStatusResponse,
  CheckEmailRequest,
} from '../types/auth';
import { axiosInstance } from './axios/axiosInstance';

const checkEmail = async (params: CheckEmailRequest) => {
  const { data } = await axiosInstance.get<ApiResponse>(END_POINTS_V1.AUTH.CHECK_EMAIL, {
    params,
  });

  return data;
};

const getEmailStatus = async (params: GetEmailStatusRequest) => {
  const { data } = await axiosInstance.get<GetEmailStatusResponse>(END_POINTS_V1.AUTH.EMAIL_VERIFIED_STATUS, {
    params,
  });

  return data.result;
};

const login = async ({ code, provider, state }: LoginRequest) => {
  const { data } = await axiosInstance.post<LoginRequest, AxiosResponse<LoginResponse>>(END_POINTS_V1.AUTH.LOGIN, {
    code,
    provider,
    state,
  });

  return data.result;
};

const signup = async ({ provider, providerId, email, nickname }: SignupRequest) => {
  const { data } = await axiosInstance.post<SignupRequest, AxiosResponse<ApiResponse>>(END_POINTS_V1.AUTH.SIGNUP, {
    provider,
    providerId,
    email,
    nickname,
  });

  return data;
};

const sendEmail = async ({ email }: SendEmailRequest) => {
  const { data } = await axiosInstance.post<SendEmailRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.SEND_EMAIL,
    { email },
  );

  return data;
};

const logout = async () => {
  const { data } = await axiosInstance.post<null, AxiosResponse<ApiResponse>>(END_POINTS_V1.AUTH.LOGOUT);

  return data;
};

const reissueToken = async () => {
  const response = await axiosInstance.post<null, AxiosResponse>(END_POINTS_V1.AUTH.REISSUE_TOKEN);

  const accessToken = response.headers['authorization'];
  return { accessToken };
};

export const authApi = {
  checkEmail,
  getEmailStatus,
  login,
  signup,
  sendEmail,
  logout,
  reissueToken,
};
