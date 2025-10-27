import type { AxiosResponse } from 'axios';

import { END_POINTS, TEMP_ENDPOINTS } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import {
  LoginRequest,
  LoginResponse,
  SendEmailRequest,
  SignupRequest,
  GetEmailStatusRequest,
  GetEmailStatusResponse,
  CheckEmailRequest,
  AdminLoginRequest,
  AdminLoginResponse,
} from '@/types/auth';

import { axiosInstance } from './axios/axiosInstance';

/** 인증 이메일 전송 */
const sendEmail = async ({ email }: SendEmailRequest) => {
  const { data } = await axiosInstance.post<SendEmailRequest, AxiosResponse<ApiResponse>>(
    END_POINTS.AUTH.EMAIL_VERIFICATION,
    { email },
  );
  return data;
};

/** 이메일 인증 완료 여부 확인 */
const checkEmail = async (params: CheckEmailRequest) => {
  const { data } = await axiosInstance.get<ApiResponse>(END_POINTS.AUTH.EMAIL_CHECK_VERIFICATION, { params });
  return data;
};

/** 이메일 인증 상태 조회 */
const getEmailStatus = async (params: GetEmailStatusRequest) => {
  const { data } = await axiosInstance.get<GetEmailStatusResponse>(END_POINTS.AUTH.EMAIL_STATUS, { params });
  return data.result;
};

/** 회원가입 (소셜 ) */
const signup = async ({ provider, signupToken, email }: SignupRequest) => {
  const { data } = await axiosInstance.post<SignupRequest, AxiosResponse<ApiResponse>>(END_POINTS.AUTH.SIGNUP, {
    provider,
    signupToken,
    email,
  });
  return data;
};

/** 로그인 (소셜 ) */
const login = async ({ code, provider, state }: LoginRequest) => {
  const { data } = await axiosInstance.post<LoginRequest, AxiosResponse<LoginResponse>>(END_POINTS.AUTH.LOGIN, {
    code,
    provider,
    state,
  });
  return data.result;
};

/** 로그아웃 */
const logout = async () => {
  const { data } = await axiosInstance.post<null, AxiosResponse<ApiResponse>>(END_POINTS.AUTH.LOGOUT);
  return data;
};

/** 토큰 재발급 */
const reissueToken = async () => {
  await axiosInstance.post<null, AxiosResponse>(END_POINTS.AUTH.REISSUE);
};

/** 운영자 로그인 */
const adminLogin = async ({ email, password }: AdminLoginRequest) => {
  const { data } = await axiosInstance.post<AdminLoginRequest, AxiosResponse<AdminLoginResponse>>(
    TEMP_ENDPOINTS.ADMIN_LOGIN,
    {
      email,
      password,
    },
  );

  return data.result;
};

export const authApi = {
  sendEmail,
  checkEmail,
  getEmailStatus,
  signup,
  login,
  logout,
  reissueToken,
  adminLogin,
};
