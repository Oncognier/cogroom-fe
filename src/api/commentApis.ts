import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';

import { axiosInstance } from './axios/axiosInstance';

const deleteComment = async ({ commentId }: { commentId: string }) => {
  const { data } = await axiosInstance.delete<null, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.COMMENTS.DELETE(commentId),
  );

  return data;
};

export const commentApi = {
  deleteComment,
};
