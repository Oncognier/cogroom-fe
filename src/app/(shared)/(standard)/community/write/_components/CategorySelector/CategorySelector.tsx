import { Controller, Control } from 'react-hook-form';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import { Select } from '@/components/molecules/Select/Select';
import { CategorySelectorProps, FormControl } from '@/types/communityWrite';

import * as S from './CategorySelector.styled';

export default function CategorySelector({
  options,
  error,
  onChange,
  onCategoryChange,
  showAnonymous,
  onAnonymousToggle,
  control,
}: Omit<CategorySelectorProps, 'value'> & {
  showAnonymous: boolean;
  onAnonymousToggle: (checked: boolean) => void;
  control: FormControl;
}) {
  return (
    <S.CategoryBox>
      <S.CategorySelect>
        <Controller
          name='categoryId'
          control={control}
          rules={{ required: '카테고리를 선택해 주세요.' }}
          render={({ field }) => (
            <Select
              inputSize='md'
              label='카테고리'
              placeholder='카테고리 선택'
              options={options}
              value={field.value || []}
              error={error}
              onChange={(val) => {
                const numericVal = Array.isArray(val)
                  ? val.map((v) => (typeof v === 'string' ? parseInt(v, 10) : v))
                  : typeof val === 'string'
                    ? parseInt(val, 10)
                    : val;

                const numericArray = Array.isArray(numericVal) ? numericVal : [numericVal];

                field.onChange(numericArray);
                onChange(numericArray);

                const categoryValue = numericArray[0];
                if (categoryValue) {
                  onCategoryChange(categoryValue);
                }
              }}
            />
          )}
        />
      </S.CategorySelect>

      {showAnonymous && (
        <S.AnonymousCheckbox>
          <Controller
            name='isAnonymous'
            control={control}
            render={({ field }) => (
              <S.CheckboxWrapper>
                <Checkbox
                  size='nm'
                  isChecked={field.value}
                  onToggle={(checked) => {
                    field.onChange(checked);
                    onAnonymousToggle(checked);
                  }}
                  interactionVariant='normal'
                  name='isAnonymous'
                />
                <S.CheckboxName>익명</S.CheckboxName>
              </S.CheckboxWrapper>
            )}
          />
        </S.AnonymousCheckbox>
      )}
    </S.CategoryBox>
  );
}
