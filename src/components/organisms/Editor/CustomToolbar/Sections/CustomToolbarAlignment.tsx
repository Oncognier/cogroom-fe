'use client';

import type { Editor } from '@tiptap/react';

import ArrangeLeft from '@/assets/icons/arrange-left.svg';
import ArrangeMiddle from '@/assets/icons/arrange-middle.svg';
import ArrangeRight from '@/assets/icons/arrange-right.svg';

import * as S from '../CustomToolbar.styled';

type Props = {
  editor: Editor;
  closePopups: () => void;
};

export default function CustomToolbarAlignment({ editor, closePopups }: Props) {
  const setAlign = (align: 'left' | 'center' | 'right') => {
    editor.chain().focus().setImageAlign(align).setTextAlign(align).run();
    closePopups();
  };

  return (
    <S.AlignmentGroup>
      <S.ToolbarButton
        type='button'
        onClick={() => setAlign('left')}
        isActive={editor.isActive({ textAlign: 'left' })}
        title='왼쪽 정렬'
      >
        <ArrangeLeft />
      </S.ToolbarButton>
      <S.ToolbarButton
        type='button'
        onClick={() => setAlign('center')}
        isActive={editor.isActive({ textAlign: 'center' })}
        title='가운데 정렬'
      >
        <ArrangeMiddle />
      </S.ToolbarButton>
      <S.ToolbarButton
        type='button'
        onClick={() => setAlign('right')}
        isActive={editor.isActive({ textAlign: 'right' })}
        title='오른쪽 정렬'
      >
        <ArrangeRight />
      </S.ToolbarButton>
    </S.AlignmentGroup>
  );
}
