import { useCreatePostMutation } from '@/hooks/api/post/useCreatePost';
import { useUpdatePostMutation } from '@/hooks/api/post/useUpdatePost';
import { CommunityWriteFormData } from '@/types/communityWrite';
import { extractImageUrls, calculateDeleteUrls, extractCategoryId } from '@/utils/postUtils';

interface ExistingPost {
  daily?: {
    question: string;
    answer: string;
  } | null;
  content: string;
}

interface DailyData {
  answer?: string;
}

export interface UsePostSubmissionProps {
  isEditMode: boolean;
  editPostId: string | null;
  existingPost?: ExistingPost;
  dailyData?: DailyData;
  isDaily: boolean;
  isDailyCategory: boolean;
}

export interface UsePostSubmissionReturn {
  isLoading: boolean;
  onSubmit: (formData: CommunityWriteFormData) => void;
}

export const usePostSubmission = ({
  isEditMode,
  editPostId,
  existingPost,
  dailyData,
  isDaily,
  isDailyCategory,
}: UsePostSubmissionProps): UsePostSubmissionReturn => {
  const { createPost, isLoading: isCreating } = useCreatePostMutation();
  const { updatePost, isLoading: isUpdating } = useUpdatePostMutation();

  const isLoading = isCreating || isUpdating;

  const onSubmit = (formData: CommunityWriteFormData) => {
    const categoryId = extractCategoryId(formData.categoryId);
    const imageUrlList = extractImageUrls(formData.content);
    const isAnonymousRendered =
      (isEditMode && existingPost?.daily && isDailyCategory) || (!!dailyData?.answer && isDaily && isDailyCategory);

    const finalIsAnonymous = isAnonymousRendered ? formData.isAnonymous : false;

    if (isEditMode && editPostId) {
      const existingImageUrls = extractImageUrls(existingPost!.content);
      const deleteUrlList = calculateDeleteUrls(existingImageUrls, imageUrlList);

      updatePost({
        postId: editPostId,
        title: formData.title,
        categoryId: categoryId,
        content: formData.content,
        isAnonymous: finalIsAnonymous,
        imageUrlList: imageUrlList,
        deleteUrlList: deleteUrlList,
      });
    } else {
      createPost({
        title: formData.title,
        categoryId: categoryId,
        content: formData.content,
        isAnonymous: finalIsAnonymous,
        imageUrlList: imageUrlList,
      });
    }
  };

  return {
    isLoading,
    onSubmit,
  };
};
