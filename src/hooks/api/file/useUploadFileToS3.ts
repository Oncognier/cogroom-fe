import { useMutation } from '@tanstack/react-query';

import { fileApi } from '@/api/fileApis';

interface UseUploadFileToS3Props {
  onSuccess?: (uploadedUrl: string) => void;
  onError?: () => void;
}

export const useUploadFileToS3Mutation = ({ onSuccess }: UseUploadFileToS3Props = {}) => {
  const mutation = useMutation({
    mutationFn: async ({ file }: { file: File }) => {
      const { name: fileName, type: fileType } = file;

      const presignedUrl = await fileApi.getPresignedUrl({ fileName, fileType });

      const uploadedUrl = await fileApi.uploadToS3({ presignedUrl, file });

      return uploadedUrl;
    },
    onSuccess: (uploadedUrl) => {
      onSuccess?.(uploadedUrl);
    },
    onError: () => {
      alert('파일 업로드에 실패했습니다. 다시 시도해주세요.');
    },
  });

  return {
    uploadToS3: mutation.mutate,
    ...mutation,
  };
};
