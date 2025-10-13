'use client';

import { EditorContent } from '@tiptap/react';

import { useCustomEditor } from '@/hooks/useCustomEditor';

import CustomToolbar from './CustomToolbar/CustomToolbar';
import * as S from './Editor.styled';

export type EditorProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: number;
  readonly?: boolean;
  className?: string;
};

export default function Editor({
  value,
  onChange,
  placeholder = '내용을 입력해주세요...',
  height = 400,
  readonly = false,
  className,
}: EditorProps) {
  const editor = useCustomEditor({
    value,
    onChange,
    placeholder,
    readonly,
  });

  if (!editor) return null;

  return (
    <S.EditorWrapper className={className}>
      <CustomToolbar editor={editor} />
      <S.EditorContent height={height}>
        <EditorContent editor={editor} />
      </S.EditorContent>
    </S.EditorWrapper>
  );
}
