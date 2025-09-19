import { ApiResponse, CursorPaginationResult } from './api';
import { PostCategory, PostSummary } from './post';

export type CommentStatus = 'ACTIVE' | 'DELETED_BY_USER' | 'DELETED_BY_ADMIN' | 'USER_WITHDRAWN' | 'HIDDEN_BY_ADMIN';

export interface CommentAuthor {
  authorId: number;
  displayName: string;
  isAnonymous: boolean;
  profileUrl: string;
}

export interface CommentMyStatus {
  isLiked: boolean;
}

export type Comment = {
  commentId: number;
  content: string;
  comment: string;
  parentId?: number;
  status: CommentStatus;
  post: PostSummary;
  category: PostCategory;
  author: CommentAuthor;
  isLiked: boolean;
  isMine: boolean;
  likeCount: number;
  myStatus: CommentMyStatus;
  children?: Comment[];
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentRequest = {
  parentId?: number;
  content: string;
  isAnonymous: boolean;
  mentionedList: number[];
};

export type CreateCommentResponse = ApiResponse & {
  result: Comment;
};

export type UpdateCommentRequest = {
  content: string;
  isAnonymous: boolean;
  mentionedList: number[];
};

export type UpdateCommentResponse = ApiResponse & {
  result: Comment;
};

export type CommentListRequest = {
  categoryId?: number[];
  pageSize?: number;
  cursor?: number;
};

export type CommentListResponse = ApiResponse & {
  result: CursorPaginationResult<Comment>;
};

export interface DeleteCommentLikeResponse extends ApiResponse {
  result?: [];
}
