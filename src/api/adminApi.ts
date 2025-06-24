import { END_POINTS_V1 } from '@/constants/api';
import { MemberListRequest, MemberListResponse } from '@/types/admin';

import { axiosInstance } from './axios/axiosInstance';

const getMemberList = async (params: MemberListRequest) => {
  const { data } = await axiosInstance.get<MemberListResponse>(END_POINTS_V1.ADMIN.MEMBERS.LIST, {
    params,
  });

  return data.result;
};

export const adminApi = {
  getMemberList,
};
