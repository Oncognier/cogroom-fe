'use client';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import NumberPagination from './NumberPagination';

const meta = {
  title: 'components/molecules/NumberPagination',
  component: NumberPagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number' },
    },
    totalPages: {
      control: { type: 'number' },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'nm'],
    },
    onPageChange: { action: 'page changed' },
  },
} satisfies Meta<typeof NumberPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'nm',
    totalPages: 10,
    currentPage: 1,
    onPageChange: action('onPageChange'),
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage ?? 1);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      action('onPageChange')(page);
    };

    return (
      <NumberPagination
        {...args}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
  },
};
