import { Controller } from 'react-hook-form';

import Input from '@/components/molecules/Input/Input';
import { VALIDATION_MESSAGE } from '@/constants/validationMessages';
import { FormControl } from '@/types/communityWrite';
import { validatePostTitle } from '@/utils/validators/postValidators';

export default function TitleInput({ control, error }: { control: FormControl; error?: string }) {
  return (
    <Controller
      name='title'
      control={control}
      rules={{
        required: VALIDATION_MESSAGE.POST_TITLE_EMPTY_FIELD_ERROR,
        maxLength: {
          value: 50,
          message: VALIDATION_MESSAGE.POST_TITLE_TOO_LONG_ERROR,
        },
        validate: validatePostTitle,
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
