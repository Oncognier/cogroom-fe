'use client';

import CharacterCount from '@tiptap/extension-character-count';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import { Link } from '@tiptap/extension-link';
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
      onChange(editor.getHTML());
    },
    editorProps: {
      handleKeyDown(view, event) {
        if (!editor) return false;
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            editor.chain().focus().liftListItem('listItem').run();
          } else {
            editor.chain().focus().sinkListItem('listItem').run();
          }
          return true;
        }

        if (event.key === 'Enter') {
          const { state } = view;
          const { $from } = state.selection;
          if ($from.parent.content.size === 0 && $from.parent.type.name === 'listItem') {
            editor.chain().focus().liftListItem('listItem').run();
            return true;
          }
        }

        return false;
      },
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
