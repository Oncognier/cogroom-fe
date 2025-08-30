export type PostCategory = {
  categoryId: number;
  name: string;
};

export type PostAuthor = {
  authorId: number;
  displayName: string;
  isAnonymous: boolean;
  profileUrl: string;
};

export type PostStatus = {
  isLiked: boolean;
  isCommented: boolean;
  isSaved: boolean;
};

export type Post = {
  postId: number;
  title: string;
  thumbnailUrl?: string;
  category: PostCategory;
  author?: PostAuthor;
  myStatus: PostStatus;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  saveCount: number;
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  commentId: number;
  comment: string;
  parentId: number | null;
  post: Post;
  createdAt: string;
  updatedAt: string;
};
