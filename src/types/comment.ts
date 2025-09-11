import { PostCategory, PostSummary } from './post';

export type CommentStatus = 'ACTIVE' | 'DELETED_BY_USER' | 'DELETED_BY_ADMIN' | 'USER_WITHDRAWN';

export interface CommentAuthor {
  authorId: number;
  displayName: string;
  isAnonymous: boolean;
  profileUrl: string;
}

export type Comment = {
  commentId: number;
  comment: string;
  status: CommentStatus;
  post: PostSummary;
  category: PostCategory;
  author: CommentAuthor;
  createdAt: string;
  updatedAt: string;
};
