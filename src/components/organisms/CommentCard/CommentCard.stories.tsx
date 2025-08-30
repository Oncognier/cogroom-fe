import type { Meta, StoryObj } from '@storybook/react';

import CommentCard from './CommentCard';

const meta = {
  title: 'components/organisms/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    commentData: {
      commentId: 1,
      comment: '코그룸 커뮤니티 첫 글',
      parentId: null,
      post: {
        postId: 1,
        title: '코그룸 커뮤니티 첫 글',
        category: { categoryId: 1, name: '사색/고민' },
        author: {
          authorId: 10,
          displayName: '코그니어 1',
          isAnonymous: false,
          profileUrl: '',
        },
        myStatus: { isLiked: true, isCommented: false, isSaved: true },
        viewCount: 1200,
        likeCount: 3240,
        commentCount: 300,
        saveCount: 5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
};

export const WithParent: Story = {
  args: {
    commentData: {
      commentId: 1,
      comment: '코그룸 커뮤니티 첫 글 인데 길면 이렇게 된다는 것을 보여주기 위함',
      parentId: 1,
      post: {
        postId: 1,
        title: '이건 원게시물 제목입니다. 이건 원게시물 제목입니다',
        category: { categoryId: 1, name: '사색/고민' },
        author: {
          authorId: 10,
          displayName: '코그니어 1',
          isAnonymous: false,
          profileUrl: '',
        },
        myStatus: { isLiked: true, isCommented: false, isSaved: true },
        viewCount: 1200,
        likeCount: 3240,
        commentCount: 300,
        saveCount: 5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
};
