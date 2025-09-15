'use client';

import type { Editor } from '@tiptap/react';

import Bold from '@/assets/icons/editor-bold.svg';
import Italic from '@/assets/icons/editor-italic.svg';
import Strike from '@/assets/icons/editor-strike.svg';
import Underline from '@/assets/icons/editor-underline.svg';

import * as S from '../CustomToolbar.styled';

type Props = {
  editor: Editor;
  closePopups: () => void;
};

export default function CustomToolbarInline({ editor, closePopups }: Props) {
  const handleBold = () => {
    editor.chain().focus().toggleBold().run();
    closePopups();
  };
  const handleItalic = () => {
    editor.chain().focus().toggleItalic().run();
    closePopups();
  };
  const handleUnderline = () => {
    editor.chain().focus().toggleUnderline().run();
    closePopups();
  };
  const handleStrike = () => {
    editor.chain().focus().toggleStrike().run();
    closePopups();
  };

  return (
    <S.InlineGroup>
      <S.ToolbarButton
        onClick={handleBold}
        isActive={editor.isActive('bold')}
      >
        <Bold />
      </S.ToolbarButton>
      <S.ToolbarButton
        onClick={handleItalic}
        isActive={editor.isActive('italic')}
      >
        <Italic />
      </S.ToolbarButton>
      <S.ToolbarButton
        onClick={handleUnderline}
        isActive={editor.isActive('underline')}
      >
        <Underline />
      </S.ToolbarButton>
      <S.ToolbarButton
        onClick={handleStrike}
        isActive={editor.isActive('strike')}
      >
        <Strike />
      </S.ToolbarButton>
    </S.InlineGroup>
  );
}
