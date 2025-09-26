'use client';

import type { Editor } from '@tiptap/react';
import { useState } from 'react';

import * as S from './CustomToolbar.styled';
import CustomToolbarAlignment from './Sections/CustomToolbarAlignment';
import CustomToolbarInline from './Sections/CustomToolbarInline';
import CustomToolbarList from './Sections/CustomToolbarList';
import CustomToolbarPalette from './Sections/CustomToolbarPalette';
import CustomToolbarUtilities from './Sections/CustomToolbarUtilities';

export type PopupType = 'media' | 'typography' | 'color' | 'link' | 'font' | null;

type CustomToolbarProps = {
  editor: Editor;
};

export default function CustomToolbar({ editor }: CustomToolbarProps) {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [selectedFont, setSelectedFont] = useState<string>('기본서체');

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
      <CustomToolbarAlignment
        editor={editor}
        closePopups={closePopups}
      />
      <CustomToolbarList
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
