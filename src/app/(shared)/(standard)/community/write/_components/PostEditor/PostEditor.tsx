import { Controller } from 'react-hook-form';

import Editor from '@/components/organisms/Editor/Editor';
import { PostEditorProps, FormControl } from '@/types/communityWrite';

import * as S from './PostEditor.styled';

export default function PostEditor({
  control,
  onContentChange,
  height = 600,
}: PostEditorProps & {
  control: FormControl;
  onContentChange: (value: string) => void;
}) {
  return (
    <Controller
      name='content'
      control={control}
      render={({ field }) => (
        <S.ContentSection>
          <Editor
            value={field.value || ''}
            onChange={(val) => {
              field.onChange(val);
              onContentChange(val);
            }}
            height={height}
          />
        </S.ContentSection>
      )}
    />
  );
}
