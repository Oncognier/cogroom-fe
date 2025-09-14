'use client';

import type { Editor } from '@tiptap/react';
import { useState } from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ImageIcon from '@/assets/icons/image.svg';
import Link from '@/assets/icons/upload.svg';
import { useUploadFileToS3Mutation } from '@/hooks/api/file/useUploadFileToS3';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './CustomToolbar.styled';
import CustomToolbarInline from './Sections/CustomToolbarInline';
import CustomToolbarPalette from './Sections/CustomToolbarPalette';
import CustomToolbarParagraph from './Sections/CustomToolbarParagraph';
import CustomToolbarUtilities from './Sections/CustomToolbarUtilities';

export type PopupType = 'media' | 'typography' | 'color' | 'link' | 'font' | null;

type CustomToolbarProps = {
  editor: Editor;
};

export default function CustomToolbar({ editor }: CustomToolbarProps) {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [selectedFont, setSelectedFont] = useState<string>('기본서체');
  const { open: openAlert } = useAlertModalStore();

  const { uploadToS3 } = useUploadFileToS3Mutation({
    onSuccess: (accessUrls) => {
      editor
        .chain()
        .focus()
        .setCustomImage({
          src: accessUrls[0],
          width: 300,
          height: 200,
        })
        .run();
    },
  });

  const togglePopup = (popup: PopupType) => {
    setActivePopup((prev) => (prev === popup ? null : popup));
  };

  const closePopups = () => setActivePopup(null);

  return (
    <S.CustomToolbar>
      <CustomToolbarPalette
        editor={editor}
        activePopup={activePopup}
        togglePopup={togglePopup}
        closePopups={closePopups}
        selectedFont={selectedFont}
        onSelectFont={setSelectedFont}
      />
      <S.Divider />
      <CustomToolbarInline
        editor={editor}
        closePopups={closePopups}
      />
      <S.Divider />
      <CustomToolbarParagraph
        editor={editor}
        closePopups={closePopups}
      />
      <S.Divider />
      <CustomToolbarUtilities
        editor={editor}
        activePopup={activePopup}
        togglePopup={togglePopup}
        closePopups={closePopups}
      />
    </S.CustomToolbar>
  );
}
