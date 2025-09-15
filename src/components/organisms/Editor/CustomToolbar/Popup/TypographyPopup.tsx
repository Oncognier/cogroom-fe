'use client';

import type { Editor } from '@tiptap/react';

import * as S from './PopupStyles.styled';

type TypographyPopupProps = {
  editor: Editor;
  onClose: () => void;
};

export default function TypographyPopup({ editor, onClose }: TypographyPopupProps) {
  const handleHeading1 = () => {
    editor.chain().focus().toggleHeading({ level: 1 }).run();
    onClose();
  };

  const handleHeading2 = () => {
    editor.chain().focus().toggleHeading({ level: 2 }).run();
    onClose();
  };

  const handleHeading3 = () => {
    editor.chain().focus().toggleHeading({ level: 3 }).run();
    onClose();
  };

  const handleParagraph = () => {
    editor.chain().focus().setParagraph().run();
    onClose();
  };

  return (
    <S.PopupContainer>
      <S.TypographyList>
        <S.TypographyItem
          onClick={handleHeading1}
          isActive={editor.isActive('heading', { level: 1 })}
        >
          <S.TypographyText size='h1'>제목 1</S.TypographyText>
        </S.TypographyItem>
        <S.TypographyItem
          onClick={handleHeading2}
          isActive={editor.isActive('heading', { level: 2 })}
        >
          <S.TypographyText size='h2'>제목 2</S.TypographyText>
        </S.TypographyItem>
        <S.TypographyItem
          onClick={handleHeading3}
          isActive={editor.isActive('heading', { level: 3 })}
        >
          <S.TypographyText size='h3'>제목 3</S.TypographyText>
        </S.TypographyItem>
        <S.TypographyItem
          onClick={handleParagraph}
          isActive={editor.isActive('paragraph')}
        >
          <S.TypographyText size='p'>본문</S.TypographyText>
        </S.TypographyItem>
      </S.TypographyList>
    </S.PopupContainer>
  );
}
