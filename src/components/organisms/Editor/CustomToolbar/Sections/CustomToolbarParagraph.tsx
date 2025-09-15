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
    editor.chain().focus().toggleBulletList().run();
  };

  const toggleOrderedList = () => {
    editor.chain().focus().toggleOrderedList().run();
    closePopups();
  };

  return (
    <S.ParagraphGroup>
      <S.ToolbarButton
        type='button'
        onClick={() => setAlign('left')}
        isActive={editor.isActive({ textAlign: 'left' })}
      >
        <ArrangeLeft />
      </S.ToolbarButton>
      <S.ToolbarButton
        type='button'
        onClick={() => setAlign('center')}
        isActive={editor.isActive({ textAlign: 'center' })}
      >
        <ArrangeMiddle />
      </S.ToolbarButton>
      <S.ToolbarButton
        type='button'
        onClick={() => setAlign('right')}
        isActive={editor.isActive({ textAlign: 'right' })}
      >
        <ArrangeRight />
      </S.ToolbarButton>
      <S.ToolbarButton
        type='button'
        onClick={toggleBulletList}
        isActive={editor.isActive('bulletList')}
      >
        <List />
      </S.ToolbarButton>
      <S.ToolbarButton
        type='button'
        onClick={toggleOrderedList}
        isActive={editor.isActive('orderedList')}
      >
        <ListOrdered />
      </S.ToolbarButton>
    </S.ParagraphGroup>
  );
}
