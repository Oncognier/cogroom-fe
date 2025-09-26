'use client';

import type { Editor } from '@tiptap/react';

import ListOrdered from '@/assets/icons/list-ordered.svg';
import List from '@/assets/icons/list.svg';

import * as S from '../CustomToolbar.styled';

type Props = {
  editor: Editor;
  closePopups: () => void;
};

export default function CustomToolbarList({ editor, closePopups }: Props) {
  const toggleBulletList = () => {
    editor.chain().focus().toggleBulletList().run();
    closePopups();
  };

  const toggleOrderedList = () => {
    editor.chain().focus().toggleOrderedList().run();
    closePopups();
  };

  return (
    <S.ListGroup>
      <S.ToolbarButton
        type='button'
        onClick={toggleBulletList}
        isActive={editor.isActive('bulletList')}
        title='불릿 리스트'
      >
        <List />
      </S.ToolbarButton>
      <S.ToolbarButton
        type='button'
        onClick={toggleOrderedList}
        isActive={editor.isActive('orderedList')}
        title='순서 리스트'
      >
        <ListOrdered />
      </S.ToolbarButton>
    </S.ListGroup>
  );
}