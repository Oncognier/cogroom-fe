import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { DeleteMemberRequest, MemberListRequest, MemberListResponse } from '@/types/admin';
import { ApiResponse } from '@/types/api';

import { axiosInstance } from './axios/axiosInstance';

const getMemberList = async (params: MemberListRequest) => {
  const { data } = await axiosInstance.get<MemberListResponse>(END_POINTS_V1.ADMIN.MEMBERS.LIST, {
    params,
  });

  return data.result;
};

const deleteMember = async ({ memberIdList }: DeleteMemberRequest) => {
  const { data } = await axiosInstance.delete<DeleteMemberRequest, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.ADMIN.MEMBERS.DELETE,
    {
      data: { memberIdList },
    },
  );

  return data;
};

export const adminApi = {
  getMemberList,
  deleteMember,
};
