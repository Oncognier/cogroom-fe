import { ApiResponse, CursorPaginationResult } from './api';

export type PostStatus = 'ACTIVE' | 'DELETED_BY_USER' | 'DELETED_BY_ADMIN' | 'USER_WITHDRAWN';

export interface PostSummary {
  postId: number;
  title: string;
}

export interface PostCategory {
  categoryId: number;
  name: string;
}

export interface PostAuthor {
  authorId: number | null;
  displayName: string | null;
  isAnonymous: boolean;
  profileUrl: string | null;
}

export interface PostMyStatus {
  isLiked: boolean;
  isCommented: boolean;
  isSaved: boolean;
}

export interface Post {
  postId: number;
  title: string;
  status?: PostStatus;
  thumbnailUrl?: string;
  category: PostCategory;
  author?: PostAuthor;
  myStatus?: PostMyStatus;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
  saveCount?: number;
  createdAt: string;
  updatedAt: string;
}

export type CreatePostRequest = {
  title: string;
  categoryId: number;
  content: string;
  isAnonymous: boolean;
  imageUrlList: string[];
};

export interface CreatePostResponse extends ApiResponse {
  result: Post;
}

export interface PostResponse extends ApiResponse {
  result: {
    postId: number;
    title: string;
    content: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    saveCount: number;
    createdAt: string;
    updatedAt: string;
    isMine: boolean;
    isAnonymous: boolean;
    category: {
      categoryId: number;
      name: string;
    };
    author: {
      authorId: number;
      displayName: string;
      isAnonymous: boolean;
      profileUrl: string | null;
    };
    myStatus: {
      isLiked: boolean;
      isSaved: boolean;
    };
    daily: {
      question: string;
      answer: string;
    } | null;
  };
}

export interface PostListRequest {
  categoryId?: number;
  cursor: number | null;
}

export interface PostListResponse extends ApiResponse {
  result: CursorPaginationResult<Post>;
}
