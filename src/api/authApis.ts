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
} from '@/types/auth';

import { axiosInstance } from './axios/axiosInstance';

/** 인증 이메일 전송 */
const sendEmail = async ({ email }: SendEmailRequest) => {
  const { data } = await axiosInstance.post<SendEmailRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.EMAIL_VERIFICATION,
    { email },
  );
  return data;
};

/** 이메일 인증 완료 여부 확인 */
const checkEmail = async (params: CheckEmailRequest) => {
  const { data } = await axiosInstance.get<ApiResponse>(END_POINTS_V1.AUTH.EMAIL_CHECK_VERIFICATION, { params });
  return data;
};

/** 이메일 인증 상태 조회 */
const getEmailStatus = async (params: GetEmailStatusRequest) => {
  const { data } = await axiosInstance.get<GetEmailStatusResponse>(END_POINTS_V1.AUTH.EMAIL_STATUS, { params });
  return data.result;
};

/** 회원가입 (소셜/로컬 통합) */
const signup = async ({ provider, signupToken, email }: SignupRequest) => {
  const { data } = await axiosInstance.post<SignupRequest, AxiosResponse<ApiResponse>>(END_POINTS_V1.AUTH.SIGNUP, {
    provider,
    signupToken,
    email,
  });
  return data;
};

/** 로그인 (소셜/로컬 통합) */
const login = async ({ code, provider, state }: LoginRequest) => {
  const { data } = await axiosInstance.post<LoginRequest, AxiosResponse<LoginResponse>>(END_POINTS_V1.AUTH.LOGIN, {
    code,
    provider,
    state,
  });
  return data.result;
};

/** 로그아웃 */
const logout = async () => {
  const { data } = await axiosInstance.post<null, AxiosResponse<ApiResponse>>(END_POINTS_V1.AUTH.LOGOUT);
  return data;
};

/** 토큰 재발급 */
const reissueToken = async () => {
  await axiosInstance.post<null, AxiosResponse>(END_POINTS_V1.AUTH.REISSUE);
};

export const authApi = {
  sendEmail,
  checkEmail,
  getEmailStatus,
  signup,
  login,
  logout,
  reissueToken,
};
