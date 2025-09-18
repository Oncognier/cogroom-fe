import type { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import { CreatePostRequest, CreatePostResponse, PostListRequest, PostListResponse, PostResponse } from '@/types/post';

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

const getPostList = async (params: PostListRequest) => {
  const { data } = await axiosInstance.get<PostListResponse>(END_POINTS_V1.POSTS.LIST, {
    params,
  });

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

const deletePost = async ({ postId }: { postId: string }) => {
  const { data } = await axiosInstance.delete<null, AxiosResponse<ApiResponse>>(END_POINTS_V1.POSTS.DELETE(postId));

  return data;
};

export const postApi = {
  createPost,
  getPost,
  getPostList,
  togglePostLike,
  unlikePost,
  savePost,
  unsavePost,
  deletePost,
};
