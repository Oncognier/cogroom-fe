'use client';

import { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Filter from '@/assets/icons/filter.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Search from '@/components/atoms/Search/Search';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { Select } from '@/components/molecules/Select/Select';
import SelectDateRange from '@/components/molecules/SelectDateRange/SelectDateRange';
import BottomSheet from '@/components/organisms/BottomSheet';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { formatCountPlus } from '@/utils/formatText';

import * as S from './SearchFilter.styled';

export interface FilterFieldConfig {
  search?: {
    name: string;
    placeholder: string;
  }[];
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
  const bottomSheet = useBottomSheet();

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

  const { control, handleSubmit, watch, setValue } = useForm<FilterValues>({
    defaultValues: getInitialValues(),
  });

  const handleFormSubmit = (formValues: FilterValues) => {
    bottomSheet.close();
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
    <>
      <S.DesktopOnly>
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
              <SelectDateRange
                selectedStartDate={(watch(fields.dateRange.startDateName || 'startDate') as Date) || null}
                selectedEndDate={(watch(fields.dateRange.endDateName || 'endDate') as Date) || null}
                onStartDateChange={(date) => setValue(fields.dateRange!.startDateName || 'startDate', date)}
                onEndDateChange={(date) => setValue(fields.dateRange!.endDateName || 'endDate', date)}
              />
            )}

            {fields.search?.map((searchField, index) => {
              return (
                <Controller
                  key={`search-${index}`}
                  name={searchField.name}
                  control={control}
                  render={({ field }) => (
                    <S.FieldWrapper>
                      <Search
                        inputSize='sm'
                        placeholder={searchField.placeholder}
                        interactionVariant='normal'
                        value={String(field.value ?? '')}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </S.FieldWrapper>
                  )}
                />
              );
            })}

            {actions.map((action, index) => renderButton(action, index))}
          </S.FilterContainer>
        </S.SearchFilter>
      </S.DesktopOnly>

      <S.MobileOnly>
        {totalTitle && <S.Title>{`${totalTitle} (${formatCountPlus(total, 10000)})`}</S.Title>}
        <S.FloatingButtonWrapper>
          <SolidButton
            size='lg'
            type='button'
            label='필터 검색'
            iconLeft={<Filter />}
            interactionVariant='normal'
            onClick={bottomSheet.open}
            round
          />
        </S.FloatingButtonWrapper>

        <BottomSheet
          isOpen={bottomSheet.isOpen}
          onClose={bottomSheet.close}
        >
          <S.FilterContainer
            className={className}
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <S.TitleSection>
              <S.HandleBar />
              <S.Title>필터 선택</S.Title>
            </S.TitleSection>

            <S.FilterSection>
              {fields.search?.map((searchField, index) => {
                return (
                  <Controller
                    key={`search-${index}`}
                    name={searchField.name}
                    control={control}
                    render={({ field }) => (
                      <S.FieldWrapper>
                        <S.MobileGroupLabel>{searchField.placeholder}</S.MobileGroupLabel>
                        <Search
                          inputSize='sm'
                          placeholder={searchField.placeholder}
                          interactionVariant='normal'
                          value={String(field.value ?? '')}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                      </S.FieldWrapper>
                    )}
                  />
                );
              })}

              {fields.select?.map((selectField, i) => (
                <Controller
                  key={`select-${i}`}
                  name={selectField.name}
                  control={control}
                  render={({ field: { value, onChange } }) => {
                    const current = Array.isArray(value) ? value : value !== undefined && value !== null ? [value] : [];

                    const handleClick = (v: string | number) => {
                      if (selectField.isMulti) {
                        const next = current.includes(v) ? current.filter((x) => x !== v) : [...current, v];
                        onChange(next);
                      } else {
                        onChange(v);
                      }
                    };

                    return (
                      <S.FieldWrapper>
                        <S.MobileGroupLabel>{selectField.placeholder}</S.MobileGroupLabel>
                        <S.OptionButtonGroup>
                          {selectField.options.map(({ label, value: v }) => {
                            const isActive = current.includes(v);
                            return (
                              <SolidButton
                                key={`${selectField.name}-${String(v)}`}
                                size='sm'
                                type='button'
                                label={label}
                                color={isActive ? 'primary' : 'assistive'} // 컴포넌트가 assistive 미지원이면 outlined로 교체하거나 색상 맵핑 필요
                                interactionVariant='normal'
                                onClick={() => handleClick(v)}
                              />
                            );
                          })}
                        </S.OptionButtonGroup>
                      </S.FieldWrapper>
                    );
                  }}
                />
              ))}

              {actions.map((action, index) => renderButton(action, index))}
            </S.FilterSection>
          </S.FilterContainer>
        </BottomSheet>
      </S.MobileOnly>
    </>
  );
}
