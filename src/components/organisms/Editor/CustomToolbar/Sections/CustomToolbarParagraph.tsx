'use client';

import type { Editor } from '@tiptap/react';

import ArrangeLeft from '@/assets/icons/arrange-left.svg';
import ArrangeMiddle from '@/assets/icons/arrange-middle.svg';
import ArrangeRight from '@/assets/icons/arrange-right.svg';
import ListOrdered from '@/assets/icons/list-ordered.svg';
import List from '@/assets/icons/list.svg';

import * as S from '../CustomToolbar.styled';

type Props = {
  editor: Editor;
  closePopups: () => void;
};

export default function CustomToolbarParagraph({ editor, closePopups }: Props) {
  const setAlign = (align: 'left' | 'center' | 'right') => {
    editor.chain().focus().setTextAlign(align).run();
    closePopups();
  };

  const toggleBulletList = () => {
    const currentAlign = editor.state.selection.$from.parent.attrs?.textAlign;
    editor.chain().focus().toggleBulletList().run();
    if (currentAlign && currentAlign !== 'left') {
      editor.chain().focus().setTextAlign(currentAlign).run();
    }
    closePopups();
  };

  const toggleOrderedList = () => {
    const currentAlign = editor.state.selection.$from.parent.attrs?.textAlign;
    editor.chain().focus().toggleOrderedList().run();
    if (currentAlign && currentAlign !== 'left') {
      editor.chain().focus().setTextAlign(currentAlign).run();
    }
    closePopups();
  };

  return (
    <S.ParagraphGroup>
      <S.ToolbarButton
        onClick={() => setAlign('left')}
        isActive={editor.isActive({ textAlign: 'left' })}
      >
        <ArrangeLeft />
      </S.ToolbarButton>
      <S.ToolbarButton
        onClick={() => setAlign('center')}
        isActive={editor.isActive({ textAlign: 'center' })}
      >
        <ArrangeMiddle />
      </S.ToolbarButton>
      <S.ToolbarButton
        onClick={() => setAlign('right')}
        isActive={editor.isActive({ textAlign: 'right' })}
      >
        <ArrangeRight />
      </S.ToolbarButton>
      <S.ToolbarButton
        onClick={toggleBulletList}
        isActive={editor.isActive('bulletList')}
      >
        <List />
      </S.ToolbarButton>
      <S.ToolbarButton
        onClick={toggleOrderedList}
        isActive={editor.isActive('orderedList')}
      >
        <ListOrdered />
      </S.ToolbarButton>
    </S.ParagraphGroup>
  );
}
