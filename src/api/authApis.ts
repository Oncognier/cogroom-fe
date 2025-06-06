import type { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';

import { LoginRequest, LoginResponse, SendEmailRequest, CheckEmailVerifiedRequest, SignupRequest } from '../types/auth';
import { axiosInstance } from './axios/axiosInstance';

const login = async ({ code, provider }: LoginRequest) => {
  const { data } = await axiosInstance.post<LoginRequest, AxiosResponse<LoginResponse>>(
    END_POINTS_V1.AUTH.LOGIN,
    { code, provider },
    { useAuth: false },
  );
  return data;
};

const signup = async ({ provider, providerId, email, nickname }: SignupRequest) => {
  const { data } = await axiosInstance.post<SignupRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.SIGNUP,
    { provider, providerId, email, nickname },
    { useAuth: false },
  );
  return data;
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
  const { data } = await axiosInstance.post<CheckEmailVerifiedRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.CHECK_EMAIL_VERIFIED,
    { email },
    { useAuth: false },
  );
  return data;
};

export const authApi = {
  login,
  signup,
  sendEmail,
  checkEmailVerified,
};
