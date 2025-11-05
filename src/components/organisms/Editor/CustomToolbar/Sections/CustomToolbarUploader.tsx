import type { Editor } from '@tiptap/react';

import ImageIcon from '@/assets/icons/image.svg';
import { EDITOR_IMAGE_DEFAULTS } from '@/constants/editorImageDefaults';
import { useUploadFileToS3Mutation } from '@/hooks/api/file/useUploadFileToS3';

import * as S from '../CustomToolbar.styled';

type UploaderProps = {
  editor: Editor;
  closePopups: () => void;
};

export const CustomToolbarUploader = ({ editor, closePopups }: UploaderProps) => {
  const { uploadToS3 } = useUploadFileToS3Mutation({
    onSuccess: (accessUrls, originalFileNames) => {
      if (accessUrls.length > 0 && originalFileNames) {
        const s3Url = accessUrls[0];

        editor
          .chain()
          .focus()
          .setCustomImage({
            src: s3Url,
            width: EDITOR_IMAGE_DEFAULTS.width,
            height: EDITOR_IMAGE_DEFAULTS.height,
            'data-original-filename': s3Url,
          })
          .run();
        closePopups();
      }
    },
  });

  const processImageFile = (file: File) => {
    uploadToS3({ files: [file] });
  };

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      processImageFile(file);
    };

    input.click();
  };

  return (
    <>
      <S.ImageUpload
        type='button'
        onClick={handleImageUpload}
      >
        <ImageIcon />
      </S.ImageUpload>
    </>
  );
};
