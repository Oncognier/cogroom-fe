'use client';

import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import { Link } from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Placeholder from '@tiptap/extension-placeholder';
import { TextAlign } from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Underline } from '@tiptap/extension-underline';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

import { CustomImage } from './CustomImage';
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

const addListStyles = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  doc.querySelectorAll('ul').forEach(ul => {
    ul.style.listStyleType = 'disc';
    ul.style.paddingLeft = '1.5rem';
  });
  
  doc.querySelectorAll('ol').forEach(ol => {
    ol.style.listStyleType = 'decimal';
    ol.style.paddingLeft = '1.5rem';
  });
  
  return doc.body.innerHTML;
};

export default function Editor({
  value,
  onChange,
  placeholder = '내용을 입력해주세요...',
  height = 400,
  readonly = false,
  className,
}: EditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      CustomImage,
      Color,
      Link.configure({
        HTMLAttributes: {
          class: 'editor-link',
        },
        openOnClick: false,
        linkOnPaste: false,
        autolink: false,
      }),
      Underline,
      TextStyle,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'customImage', 'listItem', 'bulletList', 'orderedList'],
      }),
      FontFamily.configure({
        types: ['textStyle'],
      }),
      Placeholder.configure({
        placeholder,
        emptyEditorClass: 'is-editor-empty',
      }),
      CharacterCount.configure({
        limit: 50000,
        mode: 'textSize',
      }),
    ],
    content: value,
    editable: !readonly,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(addListStyles(html));
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <S.EditorWrapper className={className}>
      <CustomToolbar editor={editor} />
      <S.EditorContent height={height}>
        <EditorContent editor={editor} />
      </S.EditorContent>
    </S.EditorWrapper>
  );
}
