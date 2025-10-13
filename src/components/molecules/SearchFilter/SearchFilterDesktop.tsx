'use client';

import type { Control } from 'react-hook-form';

import { formatCountPlus } from '@/utils/formatText';

import ActionButton from './Controller/ActionButton';
import DateRangeController from './Controller/DateRangeController';
import SearchController from './Controller/SearchController';
import SelectController from './Controller/SelectController';
import * as S from './SearchFilter.styled';
import { FilterAction, FilterFieldConfig, FilterValues } from './SearchFilter.types';

interface SearchFilterDesktopProps {
  totalTitle?: string;
  total?: number;
  className?: string;
  fields: FilterFieldConfig;
  action: FilterAction;
  control: Control<FilterValues>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function SearchFilterDesktop({
  totalTitle,
  total,
  className,
  fields,
  action,
  control,
  onSubmit,
}: SearchFilterDesktopProps) {
  return (
    <S.SearchFilter>
      {totalTitle && <S.Title>{`${totalTitle} (${formatCountPlus(total, 10000)})`}</S.Title>}

      <S.FilterContainer
        className={className}
        onSubmit={(e) => {
          e.preventDefault();
          action?.onClick?.();
          onSubmit(e);
        }}
      >
        {fields.select?.map((f) => (
          <SelectController
            key={f.name}
            control={control}
            name={f.name}
            placeholder={f.placeholder}
            options={f.options}
            isMulti={f.isMulti}
          />
        ))}

        {fields.dateRange && (
          <DateRangeController
            control={control}
            startName={fields.dateRange.startDateName || 'startDate'}
            endName={fields.dateRange.endDateName || 'endDate'}
          />
        )}

        {fields.search?.map((f) => (
          <SearchController
            key={f.name}
            control={control}
            name={f.name}
            placeholder={f.placeholder}
          />
        ))}

        <ActionButton action={action} />
      </S.FilterContainer>
    </S.SearchFilter>
  );
}
