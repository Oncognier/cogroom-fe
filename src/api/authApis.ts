import type { AxiosResponse } from 'axios';

import axiosInstance from '@/api/axios/axiosInstance';
import { END_POINTS_V1 } from '@/constants/api';

import { PostLoginRequestBody, PostLoginResponse } from '../types/auth';

export const postLogin = async ({ code, provider }: PostLoginRequestBody) => {
  const { data } = await axiosInstance.post<PostLoginRequestBody, AxiosResponse<PostLoginResponse>>(
    END_POINTS_V1.AUTH.LOGIN,
    { code, provider },
    { useAuth: false },
  );

  return data.result;
};

const authApis = {
  postLogin,
};

export default authApis;
