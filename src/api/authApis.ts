import type { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';

import {
  LoginRequest,
  LoginResponse,
  SendEmailRequest,
  CheckEmailVerifiedRequest,
  SignupRequest,
  CheckEmailVerifiedResponse,
  WithdrawRequest,
} from '../types/auth';
import { axiosInstance } from './axios/axiosInstance';

const login = async ({ code, provider }: LoginRequest) => {
  return await axiosInstance.post<LoginRequest, AxiosResponse<LoginResponse>>(
    END_POINTS_V1.AUTH.LOGIN,
    { code, provider },
    { useAuth: false },
  );
};

const signup = async ({ provider, providerId, email, nickname }: SignupRequest) => {
  return await axiosInstance.post<SignupRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.SIGNUP,
    { provider, providerId, email, nickname },
    { useAuth: false },
  );
};

const sendEmail = async ({ email }: SendEmailRequest) => {
  const { data } = await axiosInstance.post<SendEmailRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.SEND_EMAIL,
    { email },
    { useAuth: false },
  );

  return data;
};

const checkEmailVerified = async ({ email }: CheckEmailVerifiedRequest) => {
  const { data } = await axiosInstance.post<CheckEmailVerifiedRequest, AxiosResponse<CheckEmailVerifiedResponse>>(
    END_POINTS_V1.AUTH.CHECK_EMAIL_VERIFIED,
    { email },
    { useAuth: false },
  );

  return data.result;
};

const logout = async () => {
  const { data } = await axiosInstance.post<CheckEmailVerifiedRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.LOGOUT,
  );

  return data;
};

const withdraw = async ({ reason }: WithdrawRequest) => {
  const { data } = await axiosInstance.delete<WithdrawRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.WITHDRAW,
    {
      data: { reason },
    },
  );

  return data;
};

const reissueToken = async () => {
  const response = await axiosInstance.post<null, AxiosResponse>(END_POINTS_V1.AUTH.REISSUE_TOKEN, null, {
    useAuth: false,
  });

  const accessToken = response.headers['authorization'];
  return { accessToken };
};

export const authApi = {
  login,
  signup,
  sendEmail,
  checkEmailVerified,
  logout,
  withdraw,
  reissueToken,
};
