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

export interface CreatePostResponse {
  result: Post;
}
