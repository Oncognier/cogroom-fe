import { Controller } from 'react-hook-form';

import Input from '@/components/molecules/Input/Input';
import { FormControl } from '@/types/communityWrite';

export default function TitleInput({ control, error }: { control: FormControl; error?: string }) {
  return (
    <Controller
      name='title'
      control={control}
      rules={{
        required: '제목을 입력해 주세요.',
        maxLength: {
          value: 30,
          message: '제목은 최대 30자까지 입력할 수 있어요.',
        },
        validate: (value) => {
          // 허용 문자 정규식 (한글, 영문, 숫자, 특수문자, 이모지 포함)
          const allowedRegex = /^[\p{L}\p{N}\p{P}\p{S}\p{Emoji}\s]+$/u;

          return allowedRegex.test(value) || '제목에 사용할 수 없는 문자가 있어요';
        },
      }}
      render={({ field }) => (
        <Input
          inputSize='lg'
          label='제목'
          placeholder='제목을 입력해 주세요.'
          value={field.value || ''}
          onChange={(val) => field.onChange(val)}
          error={error}
        />
      )}
    />
  );
}
