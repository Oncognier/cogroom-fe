import { Control, UseFormReturn } from 'react-hook-form';

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
  options: CategoryOption[];
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

export interface UseCommunityWriteLogicReturn {
  // Form 관련
  methods: UseFormReturn<CommunityWriteFormData>;
  onSubmit: (data: CommunityWriteFormData) => void;
  isLoading: boolean;

  // Category 관련
  categoryProps: CategorySelectorProps;

  // Daily 관련
  dailyProps: DailyQuestionCardProps | null;

  // Editor 관련
  editorProps: PostEditorProps;

  // 상태
  isEditMode: boolean;
  isLoadingPost: boolean;
  showAnonymous: boolean;
  isAnonymousDisabled: boolean;
}
