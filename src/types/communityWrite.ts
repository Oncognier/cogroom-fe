import { Control } from 'react-hook-form';

import { SelectOption } from '@/types/common';

export interface CommunityWriteFormData {
  categoryId: number[];
  title: string;
  content: string;
  isAnonymous: boolean;
}

export interface CategoryOption {
  value: number;
  label: string;
}

export interface CategorySelectorProps {
  options: SelectOption[];
  value: number[];
  error?: string;
  onChange: (value: number[]) => void;
  onCategoryChange: (categoryId: number) => void;
}

export type FormControl = Control<CommunityWriteFormData>;

export interface DailyQuestionCardProps {
  question: string;
  answer: string;
  assignedQuestionId?: number;
}

export interface PostEditorProps {
  height?: number;
}
