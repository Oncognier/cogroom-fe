'use client';

import CharacterCount from '@tiptap/extension-character-count';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import Placeholder from '@tiptap/extension-placeholder';
import { TextAlign } from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Underline } from '@tiptap/extension-underline';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { useEffect } from 'react';

import { useUploadFileToS3Mutation } from '@/hooks/api/file/useUploadFileToS3';
import { LimitListNesting } from '@/utils/editor/LimitListNesting';

import { CustomImage } from './CustomImage';
import { CustomLink } from './CustomLink';
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
  const { uploadToS3 } = useUploadFileToS3Mutation({
    onSuccess: (accessUrls) => {
      if (accessUrls.length > 0 && editor) {
        editor.chain().focus().setCustomImage({ src: accessUrls[0] }).run();
      }
    },
  });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      CustomImage,
      Color,
      CustomLink.configure({
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
      LimitListNesting,
    ],
    content: value,
    editable: !readonly,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    const handleDrop = async (event: DragEvent) => {
      event.preventDefault();

      const files = event.dataTransfer?.files;
      if (!files || files.length === 0) return;

      const file = files[0];
      if (!file.type.startsWith('image/')) return;

      uploadToS3({ files: [file] });
    };

    const dom = editor.view.dom;
    dom.addEventListener('drop', handleDrop);

    return () => {
      dom.removeEventListener('drop', handleDrop);
    };
  }, [editor, uploadToS3]);

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

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
