import type { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';

import {
  PostEmailVerificationStatusBody,
  PostLoginRequestBody,
  PostLoginResponse,
  PostSendEmailBody,
  PostSignupBody,
} from '../types/auth';
import { ApiResponse } from '@/types/api';
import { axiosInstance } from './axios/axiosInstance';

const postLogin = async ({ code, provider }: PostLoginRequestBody) => {
  const { data } = await axiosInstance.post<PostLoginRequestBody, AxiosResponse<PostLoginResponse>>(
    END_POINTS_V1.AUTH.LOGIN,
    { code, provider },
    { useAuth: false },
  );

  return data;
};

const postSendEmail = async ({ email }: PostSendEmailBody) => {
  const { data } = await axiosInstance.post<PostSendEmailBody, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.SEND_EMAIL,
    { email },
    { useAuth: false },
  );

  return data;
};

const postEmailVerificationStatus = async ({ email }: PostEmailVerificationStatusBody) => {
  const { data } = await axiosInstance.post<PostEmailVerificationStatusBody, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.CHECK_EMAIL_VERIFICATION_STATUS,
    { email },
    { useAuth: false },
  );

  return data;
};

const postSignup = async ({ provider, providerId, email, nickname }: PostSignupBody) => {
  const { data } = await axiosInstance.post<PostSignupBody, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.AUTH.SIGNUP,
    { provider, providerId, email, nickname },
    { useAuth: false },
  );

  return data;
};

const authApis = {
  postLogin,
  postSendEmail,
  postEmailVerificationStatus,
  postSignup,
};

export default authApis;
