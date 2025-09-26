import { useMutation } from '@tanstack/react-query';

import { fileApi } from '@/api/fileApis';
import { useAlertModalStore } from '@/stores/useModalStore';

interface UseUploadFileToS3Props {
  onSuccess?: (accessUrls: string[], originalFileNames?: string[]) => void;
}

export const useUploadFileToS3Mutation = ({ onSuccess }: UseUploadFileToS3Props = {}) => {
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: async ({ files }: { files: File[] }) => {
      const fileSet = files.reduce<Record<string, string>>((acc, file) => {
        acc[file.name] = file.type;
        return acc;
      }, {});

      const presignedItems = await fileApi.getPresignedUrl({ fileSet });

      await Promise.all(
        presignedItems.map((item, index) =>
          fileApi.uploadToS3({
            preSignedUrl: item.preSignedUrl,
            file: files[index],
          }),
        ),
      );

      return {
        accessUrls: presignedItems.map((item) => item.accessUrl),
        originalFileNames: files.map(file => file.name)
      };
    },
    onSuccess: ({ accessUrls, originalFileNames }) => {
      onSuccess?.(accessUrls, originalFileNames);
    },
    onError: () => {
      open('error', { message: '파일 업로드에 실패했습니다.' });
    },
  });

  return {
    uploadToS3: mutation.mutate,
    ...mutation,
  };
};
