import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import ScrollToTop from './ScrollToTop';

const meta = {
  title: 'components/atoms/ScrollToTop',
  component: ScrollToTop,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ScrollToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        minHeight: '220vh',
        background: 'linear-gradient(180deg, rgba(59,130,246,0.08) 0%, rgba(0,0,0,0) 40%)',
        padding: '24px',
      }}
    >
      <h1>Scroll Down</h1>
      <p>아래로 충분히 스크롤한 다음 버튼을 눌러보세요.</p>

      <div
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 1000,
        }}
      >
        <ScrollToTop />
      </div>
    </div>
  ),
};
