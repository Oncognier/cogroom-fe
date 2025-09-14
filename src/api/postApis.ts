import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
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

export const postApi = {
  createPost,
};
