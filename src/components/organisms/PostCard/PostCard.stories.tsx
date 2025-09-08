import type { Meta, StoryObj } from '@storybook/react';

import PostCard from './PostCard';

const meta = {
  title: 'components/organisms/PostCard',
  component: PostCard,
  tags: ['autodocs'],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      postId: 1,
      title: '코그룸 커뮤니티 첫 글',
      category: { categoryId: 1, name: '사색/고민' },
      thumbnailUrl: null,
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
  },
};

export const AnonymousAuthor: Story = {
  args: {
    post: {
      postId: 2,
      title: '익명으로 남기는 한 줄',
      category: { categoryId: 2, name: '데일리 공유' },
      thumbnailUrl: null,
      author: {
        authorId: 0,
        displayName: '어떤 사용자',
        isAnonymous: true,
        profileUrl: '',
      },
      myStatus: { isLiked: false, isCommented: true, isSaved: false },
      viewCount: 162,
      likeCount: 14,
      commentCount: 14,
      saveCount: 14,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
};

export const NoAuthor: Story = {
  args: {
    post: {
      postId: 3,
      title: '작성자 정보가 없는 포스트',
      category: { categoryId: 3, name: '칼럼' },
      thumbnailUrl: null,
      myStatus: { isLiked: false, isCommented: false, isSaved: false },
      viewCount: 42,
      likeCount: 0,
      commentCount: 0,
      saveCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
};
