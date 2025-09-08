import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Editor, { EditorProps } from './Editor';

const meta = {
  title: 'components/organisms/Editor',
  component: Editor,
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'range', min: 200, max: 800, step: 50 },
    },
    readonly: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

const EditorWithState = (args: EditorProps) => {
  const [content, setContent] = useState(args.value || '');

  return (
    <Editor
      {...args}
      value={content}
      onChange={setContent}
    />
  );
};

export const Default: Story = {
  render: EditorWithState,
  args: {
    value: '<p>에디터 기본 내용입니다. 자유롭게 편집해보세요!</p>',
    onChange: () => {},
    placeholder: '내용을 입력해주세요...',
    height: 400,
    readonly: false,
  },
};

export const WithInitialContent: Story = {
  render: EditorWithState,
  args: {
    value: `
      <h2>제목입니다</h2>
      <p>이것은 <strong>볼드체</strong>이고, 이것은 <em>이탤릭체</em>입니다.</p>
      <ul>
        <li>첫 번째 항목</li>
        <li>두 번째 항목</li>
        <li>세 번째 항목</li>
      </ul>
      <p>링크 예시: <a href="https://cogroom.kr">코그룸</a></p>
      <blockquote>
        <p>인용문입니다. 여러 줄로 작성할 수 있습니다.</p>
      </blockquote>
    `,
    onChange: () => {},
    placeholder: '내용을 입력해주세요...',
    height: 500,
    readonly: false,
  },
};

export const ReadOnly: Story = {
  render: EditorWithState,
  args: {
    value: '<p>읽기 전용 모드입니다. 편집할 수 없습니다.</p>',
    onChange: () => {},
    placeholder: '내용을 입력해주세요...',
    height: 300,
    readonly: true,
  },
};

export const MinimalHeight: Story = {
  render: EditorWithState,
  args: {
    value: '<p>최소 높이로 설정된 에디터입니다.</p>',
    onChange: () => {},
    placeholder: '내용을 입력해주세요...',
    height: 200,
    readonly: false,
  },
};

export const LargeHeight: Story = {
  render: EditorWithState,
  args: {
    value: '<p>큰 높이로 설정된 에디터입니다.</p>',
    onChange: () => {},
    placeholder: '내용을 입력해주세요...',
    height: 600,
    readonly: false,
  },
};

export const CustomPlaceholder: Story = {
  render: EditorWithState,
  args: {
    value: '',
    onChange: () => {},
    placeholder: '커뮤니티 글을 작성해보세요. 마크다운과 리치텍스트를 지원합니다.',
    height: 400,
    readonly: false,
  },
};
