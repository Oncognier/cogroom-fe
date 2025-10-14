'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useUrlSearchParams } from '@/hooks/queryParams/useUrlSearchParams';

import * as S from './SearchFilter.styled';
import type { FilterProps, FilterValues } from './SearchFilter.types';
import SearchFilterDesktop from './SearchFilterDesktop';
import SearchFilterMobile from './SearchFilterMobile';

export default function SearchFilter({ totalTitle, total, fields, action, className }: FilterProps) {
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

  const { control, handleSubmit } = useForm<FilterValues>({
    defaultValues: getInitialValues(),
  });

  const handleFormSubmit = (formValues: FilterValues) => {
    updateSearchParams(formValues);
  };

  return (
    <>
      <S.DesktopOnly>
        <SearchFilterDesktop
          totalTitle={totalTitle}
          total={total}
          fields={fields}
          action={action}
          className={className}
          control={control}
          onSubmit={handleSubmit(handleFormSubmit)}
        />
      </S.DesktopOnly>
      <S.MobileOnly>
        <SearchFilterMobile
          totalTitle={totalTitle}
          total={total}
          fields={fields}
          action={action}
          className={className}
          control={control}
          onSubmit={handleSubmit(handleFormSubmit)}
        />
      </S.MobileOnly>
    </>
  );
}
