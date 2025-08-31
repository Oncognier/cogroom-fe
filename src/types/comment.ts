export type Comment = {
  commentId: number;
  comment: string;
  parentId: number | null;
  post: {
    postId: number;
    title: string;
  };
  createdAt: string;
  updatedAt: string;
};
