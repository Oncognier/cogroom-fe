import type { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { CreatePostRequest, CreatePostResponse, PostResponse } from '@/types/post';

import { axiosInstance } from './axios/axiosInstance';

const createPost = async ({ title, categoryId, content, isAnonymous, imageUrlList }: CreatePostRequest) => {
  const { data } = await axiosInstance.post<CreatePostRequest, AxiosResponse<CreatePostResponse>>(
    END_POINTS_V1.POSTS.POST_CREATE,
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

const getPost = async (postId: string) => {
  const { data } = await axiosInstance.get<PostResponse>(END_POINTS_V1.POSTS.POST_DETAIL(postId));

  return data.result;
};

const togglePostLike = async (postId: string) => {
  const { data } = await axiosInstance.post(END_POINTS_V1.POSTS.POST_LIKE(postId));

  return data.result;
};

const unlikePost = async (postId: string) => {
  const { data } = await axiosInstance.delete(END_POINTS_V1.POSTS.POST_LIKE(postId));

  return data.result;
};

const savePost = async (postId: string) => {
  const { data } = await axiosInstance.post(END_POINTS_V1.POSTS.POST_SAVE(postId));

  return data.result;
};

const unsavePost = async (postId: string) => {
  const { data } = await axiosInstance.delete(END_POINTS_V1.POSTS.POST_SAVE(postId));

  return data.result;
};

export const postApi = {
  createPost,
  getPost,
  togglePostLike,
  unlikePost,
  savePost,
  unsavePost,
};
