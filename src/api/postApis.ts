import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import { CreatePostRequest, CreatePostResponse } from '@/types/post';

import { axiosInstance } from './axios/axiosInstance';

const createPost = async ({ title, categoryId, content, isAnonymous, imageUrlList }: CreatePostRequest) => {
  const { data } = await axiosInstance.post<CreatePostRequest, AxiosResponse<CreatePostResponse>>(
    END_POINTS_V1.POSTS.CREATE,
    {
      title,
      categoryId,
      content,
      isAnonymous,
      imageUrlList,
    },
  );

  return data.result;
};

const deletePost = async ({ postId }: { postId: string }) => {
  const { data } = await axiosInstance.delete<null, AxiosResponse<ApiResponse>>(END_POINTS_V1.POSTS.DELETE(postId));

  return data;
};

export const postApi = {
  createPost,
  deletePost,
};
