'use client';

import { useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Search from '@/components/atoms/Search/Search';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { Select } from '@/components/molecules/Select/Select';
import SelectDate from '@/components/molecules/SelectDate/SelectDate';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { formatCountPlus } from '@/utils/formatText';

import * as S from './SearchFilter.styled';

export interface FilterFieldConfig {
  search?: {
    placeholder: string;
    name?: string;
  };
  select?: {
    name: string;
    placeholder: string;
    options: Array<{ label: string; value: string | number }>;
    isMulti?: boolean;
  }[];
  dateRange?: {
    startDateName?: string;
    endDateName?: string;
  };
}

export interface FilterAction {
  type: 'submit' | 'button';
  label: string;
  variant?: 'outlined' | 'solid';
  color?: 'primary' | 'destructive';
  onClick?: () => void;
}

export interface FilterValues {
  [key: string]: unknown;
}

interface FilterProps {
  totalTitle?: string;
  total?: number;
  fields: FilterFieldConfig;
  actions: FilterAction[];
  className?: string;
}

export default function SearchFilter({ totalTitle, total, fields, actions, className }: FilterProps) {
  const { updateSearchParams, getAllSearchParams } = useUrlSearchParams();

  const convertArrayValue = useCallback(
    (key: string, value: string[]) => {
      const selectField = fields.select?.find((s) => s.name === key);
      if (!selectField) return value;

      return value.map((v) => {
        const option = selectField.options.find((opt) => String(opt.value) === v);
        return option ? option.value : v;
      });
    },
    [fields.select],
  );

  const convertSingleValue = useCallback(
    (key: string, value: string) => {
      if (key.includes('Date') && value) {
        return new Date(value);
      }

      const selectField = fields.select?.find((s) => s.name === key);
      if (!selectField || !value) return value;

      const option = selectField.options.find((opt) => String(opt.value) === value);
      return option ? option.value : value;
    },
    [fields.select],
  );

  const getInitialValues = useCallback((): FilterValues => {
    const urlParams = getAllSearchParams();
    const mergedValues: FilterValues = {};

    Object.keys(urlParams).forEach((key) => {
      const value = urlParams[key];

      if (Array.isArray(value)) {
        mergedValues[key] = convertArrayValue(key, value);
        return;
      }

      mergedValues[key] = convertSingleValue(key, value);
    });

    return mergedValues;
  }, [getAllSearchParams, convertArrayValue, convertSingleValue]);

  const { control, handleSubmit, watch, setValue, reset } = useForm<FilterValues>({
    defaultValues: getInitialValues(),
  });

  useEffect(() => {
    const urlValues = getInitialValues();
    reset(urlValues);
  }, [reset, getInitialValues]);

  const handleFormSubmit = (formValues: FilterValues) => {
    updateSearchParams(formValues);
  };

  const renderButton = (action: FilterAction, index: number) => {
    const baseProps = {
      size: 'sm' as const,
      label: action.label,
      interactionVariant: 'normal' as const,
      color: (action.color || 'primary') as 'primary' | 'destructive',
    };

    if (action.variant === 'solid') {
      return (
        <SolidButton
          key={index}
          {...baseProps}
          color='primary'
          onClick={action.onClick}
        />
      );
    }

    return (
      <OutlinedButton
        key={index}
        {...baseProps}
        {...(action.type === 'submit' ? { type: 'submit' as const } : { onClick: action.onClick })}
      />
    );
  };

  return (
    <S.SearchFilter>
      {totalTitle && <S.Title>{`${totalTitle} (${formatCountPlus(total, 10000)})`}</S.Title>}

      <S.FilterContainer
        className={className}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {fields.select?.map((selectField, index) => (
          <Controller
            key={`select-${index}`}
            name={selectField.name}
            control={control}
            render={({ field }) => {
              const selectValue = Array.isArray(field.value) ? field.value : field.value ? [field.value] : [];
              return (
                <S.FieldWrapper>
                  <Select
                    inputSize='sm'
                    placeholder={selectField.placeholder}
                    isMulti={selectField.isMulti}
                    options={selectField.options}
                    value={selectValue}
                    onChange={field.onChange}
                  />
                </S.FieldWrapper>
              );
            }}
          />
        ))}

        {fields.dateRange && (
          <SelectDate
            selectedStartDate={(watch(fields.dateRange.startDateName || 'startDate') as Date) || null}
            selectedEndDate={(watch(fields.dateRange.endDateName || 'endDate') as Date) || null}
            onStartDateChange={(date) => setValue(fields.dateRange!.startDateName || 'startDate', date)}
            onEndDateChange={(date) => setValue(fields.dateRange!.endDateName || 'endDate', date)}
          />
        )}

        {fields.search && (
          <Controller
            name={fields.search.name || 'keyword'}
            control={control}
            render={({ field }) => (
              <S.FieldWrapper>
                <Search
                  inputSize='sm'
                  placeholder={fields.search!.placeholder}
                  interactionVariant='normal'
                  value={String(field.value || '')}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </S.FieldWrapper>
            )}
          />
        )}

        {actions.map((action, index) => renderButton(action, index))}
      </S.FilterContainer>
    </S.SearchFilter>
  );
}
