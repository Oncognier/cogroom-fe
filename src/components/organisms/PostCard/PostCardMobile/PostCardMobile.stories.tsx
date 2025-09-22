import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PostCardMobile from './PostCardMobile';

const meta = {
  title: 'components/organisms/PostCard/PostCardMobile',
  component: PostCardMobile,
  tags: ['autodocs'],
  parameters: {
    viewport: { defaultViewport: 'iphone12' },
  },
  argTypes: {
    isEdit: { control: 'boolean' },
    isSelected: { control: 'boolean' },
    onToggleSelect: { action: 'toggle-select' },
    post: { control: false },
  },
} satisfies Meta<typeof PostCardMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

const nowISO = new Date().toISOString();

export const Default: Story = {
  args: {
    post: {
      postId: 101,
      title: '모바일 카드 기본 상태',
      category: { categoryId: 1, name: '사색/고민' },
      myStatus: { isLiked: true, isCommented: false, isSaved: false },
      viewCount: 1200,
      likeCount: 32,
      commentCount: 8,
      saveCount: 3,
      createdAt: nowISO,
      updatedAt: nowISO,
      thumbnailUrl: '',
    },
    isEdit: false,
  },
};

export const AnonymousCategoryChanged: Story = {
  args: {
    post: {
      postId: 102,
      title: '카테고리/상태가 다른 예시',
      category: { categoryId: 2, name: '데일리 공유' },
      myStatus: { isLiked: false, isCommented: true, isSaved: true },
      viewCount: 56,
      likeCount: 4,
      commentCount: 1,
      saveCount: 7,
      createdAt: nowISO,
      updatedAt: nowISO,
      thumbnailUrl: '',
    },
    isEdit: false,
  },
};

export const LongTitle: Story = {
  args: {
    post: {
      postId: 103,
      title: '아주아주아주아주 길어진 제목이 모바일 카드에서 잘 말줄임 처리되는지 확인하는 예시입니다',
      category: { categoryId: 3, name: '칼럼' },
      myStatus: { isLiked: false, isCommented: false, isSaved: false },
      viewCount: 9876,
      likeCount: 123,
      commentCount: 45,
      saveCount: 6,
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
      postId: 104,
      title: '편집 모드에서 체크박스 선택 토글',
      category: { categoryId: 4, name: '자유' },
      myStatus: { isLiked: false, isCommented: false, isSaved: false },
      viewCount: 0,
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
    const [selected, setSelected] = useState<boolean>(args.isSelected ?? false);
    return (
      <PostCardMobile
        {...args}
        isSelected={selected}
        onToggleSelect={(checked) => setSelected(checked)}
      />
    );
  },
};
