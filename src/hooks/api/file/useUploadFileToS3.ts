import { useMutation } from '@tanstack/react-query';

import { fileApi } from '@/api/fileApis';

interface UseUploadFileToS3Props {
  onSuccess?: (accessUrls: string[]) => void;
}

export const useUploadFileToS3Mutation = ({ onSuccess }: UseUploadFileToS3Props = {}) => {
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

      return presignedItems.map((item) => item.accessUrl);
    },
    onSuccess: (accessUrls) => {
      onSuccess?.(accessUrls);
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
