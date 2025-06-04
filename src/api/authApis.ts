import type { AxiosResponse } from 'axios';

import axiosInstance from '@/api/axios/axiosInstance';
import { END_POINTS_V1 } from '@/constants/api';

import { PostLogInRequestBody, PostLogInResponse } from '../types/auth';

export const postLogIn = async ({ code, provider }: PostLogInRequestBody) => {
  const { data } = await axiosInstance.post<PostLogInRequestBody, AxiosResponse<PostLogInResponse>>(
    END_POINTS_V1.AUTH.LOGIN,
    { code, provider },
    { useAuth: false },
  );

  return data;
};

const authApis = {
  postLogIn,
};

export default authApis;
