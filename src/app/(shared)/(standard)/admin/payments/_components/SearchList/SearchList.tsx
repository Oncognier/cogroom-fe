import X from '@/assets/icons/x.svg';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { SelectOptionOrGroup } from '@/types/common';

import * as S from './SearchList.styled';

interface SearchListProps {
  filters: {
    keyword?: string;
    category?: string[];
    startDate?: string;
    endDate?: string;
  };
  options?: SelectOptionOrGroup[];
  onRemoveFilter?: (key: string, value?: string) => void;
  onResetFilters?: () => void;
}

export const SearchList = ({ filters, options = [], onResetFilters }: SearchListProps) => {
  const getFilterLabels = () => {
    const labels: Array<{ key: string; value: string; label: string }> = [];

    // 키워드
    if (filters.keyword) {
      labels.push({ key: 'keyword', value: filters.keyword, label: filters.keyword });
    }

    // 카테고리
    if (filters.category && filters.category.length > 0) {
      const allOptions = options.flatMap((option) => ('children' in option ? option.children : [option]));

      filters.category.forEach((value) => {
        const option = allOptions.find((opt) => String(opt.value) === value);
        if (option) {
          labels.push({ key: 'category', value, label: option.label });
        }
      });
    }

    // 날짜 범위
    if (filters.startDate || filters.endDate) {
      const dateLabel = `${filters.startDate || ''} ~ ${filters.endDate || ''}`;
      labels.push({ key: 'dateRange', value: 'dateRange', label: dateLabel });
    }

    return labels;
  };

  const filterLabels = getFilterLabels();

  if (filterLabels.length === 0) return null;

  return (
    <S.SearchListContianer>
      <S.LeftSection>
        <S.SearchListTitle>적용된 필터 : </S.SearchListTitle>
        {filterLabels.map((filter, index) => (
          <SolidTag
            key={`${filter.key}-${filter.value}-${index}`}
            label={filter.label}
            color='blue'
            round={true}
          />
        ))}
      </S.LeftSection>

      <TextButton
        label='초기화'
        iconLeft={<X />}
        color='assistive'
        size='sm'
        interactionVariant='normal'
        onClick={onResetFilters}
      />
    </S.SearchListContianer>
  );
};
