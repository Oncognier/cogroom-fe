import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import PostCardDesktop from './PostCardDesktop';

const meta = {
  title: 'components/organisms/PostCardDesktop',
  component: PostCardDesktop,
  tags: ['autodocs'],
  argTypes: {
    isEdit: { control: 'boolean' },
    isSelected: { control: 'boolean' },
    onToggleSelect: { action: 'toggle-select' },
  },
} satisfies Meta<typeof PostCardDesktop>;

export default meta;
type Story = StoryObj<typeof meta>;

const nowISO = new Date().toISOString();

export const Default: Story = {
  args: {
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
      createdAt: nowISO,
      updatedAt: nowISO,
      thumbnailUrl: '',
    },
    isEdit: false,
  },
};

export const AnonymousAuthor: Story = {
  args: {
    post: {
      postId: 2,
      title: '익명으로 남기는 한 줄',
      category: { categoryId: 2, name: '데일리 공유' },
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
      createdAt: nowISO,
      updatedAt: nowISO,
      thumbnailUrl: '',
    },
    isEdit: false,
  },
};

export const NoAuthor: Story = {
  args: {
    post: {
      postId: 3,
      title: '작성자 정보가 없는 포스트',
      category: { categoryId: 3, name: '칼럼' },
      myStatus: { isLiked: false, isCommented: false, isSaved: false },
      viewCount: 42,
      likeCount: 0,
      commentCount: 0,
      saveCount: 0,
      createdAt: nowISO,
      updatedAt: nowISO,
      thumbnailUrl: '',
    },
    isEdit: false,
  },
};

export const EditMode: Story = {
  args: {
    post: {
      postId: 4,
      title: '편집 모드에서 선택 테스트',
      category: { categoryId: 4, name: '자유' },
      author: {
        authorId: 11,
        displayName: '코그니어 2',
        isAnonymous: false,
        profileUrl: '',
      },
      myStatus: { isLiked: false, isCommented: false, isSaved: false },
      viewCount: 10,
      likeCount: 0,
      commentCount: 0,
      saveCount: 0,
      createdAt: nowISO,
      updatedAt: nowISO,
      thumbnailUrl: '',
    },
    isEdit: true,
    isSelected: false,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.isSelected ?? false);
    return (
      <PostCardDesktop
        {...args}
        isSelected={selected}
        onToggleSelect={(checked) => setSelected(checked)}
      />
    );
  },
};
