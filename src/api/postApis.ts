import type { AxiosResponse } from 'axios';

import { END_POINTS } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import {
  CreatePostRequest,
  CreatePostResponse,
  PostListRequest,
  PostListResponse,
  PostResponse,
  UpdatePostRequest,
  UpdatePostResponse,
} from '@/types/post';

import { axiosInstance } from './axios/axiosInstance';

/** 게시글 목록 조회 */
const getPostList = async (params: PostListRequest) => {
  const { data } = await axiosInstance.get<PostListResponse>(END_POINTS.POSTS.ROOT, {
    params,
  });
  return data.result;
};

/** 게시글 상세 조회 */
const getPost = async (postId: string) => {
  const { data } = await axiosInstance.get<PostResponse>(END_POINTS.POSTS.BY_ID(postId));
  return data.result;
};

/** 게시글 작성 */
const createPost = async ({ title, categoryId, content, isAnonymous, imageUrlList }: CreatePostRequest) => {
  const { data } = await axiosInstance.post<CreatePostRequest, AxiosResponse<CreatePostResponse>>(
    END_POINTS.POSTS.ROOT,
    { title, categoryId, content, isAnonymous, imageUrlList },
  );
  return data.result;
};

/** 게시글 수정 */
const updatePost = async (
  postId: string,
  { title, categoryId, content, isAnonymous, imageUrlList, deleteUrlList }: UpdatePostRequest,
) => {
  const { data } = await axiosInstance.patch<UpdatePostRequest, AxiosResponse<UpdatePostResponse>>(
    END_POINTS.POSTS.BY_ID(postId),
    { title, categoryId, content, isAnonymous, imageUrlList, deleteUrlList },
  );
  return data.result;
};

/** 게시글 삭제 */
const deletePost = async ({ postId }: { postId: string }) => {
  const { data } = await axiosInstance.delete<null, AxiosResponse<ApiResponse>>(END_POINTS.POSTS.BY_ID(postId));
  return data;
};

/** 게시글 좋아요 등록 */
const likePost = async (postId: string) => {
  const { data } = await axiosInstance.post(END_POINTS.POSTS.LIKES(postId));
  return data.result;
};

/** 게시글 좋아요 취소 */
const unlikePost = async (postId: string) => {
  const { data } = await axiosInstance.delete(END_POINTS.POSTS.LIKES(postId));
  return data.result;
};

/** 게시글 저장 */
const savePost = async (postId: string) => {
  const { data } = await axiosInstance.post(END_POINTS.POSTS.SAVES(postId));
  return data.result;
};

/** 게시글 저장 취소 */
const unsavePost = async (postId: string) => {
  const { data } = await axiosInstance.delete(END_POINTS.POSTS.SAVES(postId));
  return data.result;
};

export const postApi = {
  getPostList,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  savePost,
  unsavePost,
};
