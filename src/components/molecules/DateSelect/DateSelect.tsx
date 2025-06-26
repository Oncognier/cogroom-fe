'use client';

import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import DatePicker from '@/components/molecules/DatePicker/DatePicker';
import { QUICK_DATE_SELECT } from '@/constants/common';

import * as S from './DateSelect.styled';
import DateSelector from './DateSelector/DateSelector';

export default function DateSelect({
  selectedStartDate,
  selectedEndDate,
  onStartDateChange,
  onEndDateChange,
  toggle,
}: {
  selectedStartDate: Dayjs | null;
  selectedEndDate: Dayjs | null;
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  toggle: () => void;
}) {
  const today = dayjs();
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);

  const handleQuickSelect = (days: number) => {
    const start = today.subtract(days, 'day');
    onStartDateChange(start);
    onEndDateChange(today);
  };

  return (
    <S.DateSelectWrapper>
      <S.Wrapper>
        <S.DateSelectorWrapper>
          <DateSelector
            label='시작일'
            selectedDate={selectedStartDate}
            onClick={() => {
              if (!!isEndOpen) {
                setIsEndOpen(false);
              }
              setIsStartOpen(!isStartOpen);
            }}
          />
          <DateSelector
            label='종료일'
            selectedDate={selectedEndDate}
            onClick={() => {
              if (!!isStartOpen) {
                setIsStartOpen(false);
              }
              setIsEndOpen(!isEndOpen);
            }}
          />
        </S.DateSelectorWrapper>
        <S.Line />
        <S.QuickDateSelect>
          <S.QuickDateSelectLabel>빠른 선택</S.QuickDateSelectLabel>
          {QUICK_DATE_SELECT.map((item) => (
            <S.QuickDateSelectItem
              key={item.value}
              onClick={() => handleQuickSelect(item.value)}
            >
              {item.label}
            </S.QuickDateSelectItem>
          ))}
        </S.QuickDateSelect>
        <SolidButton
          label='적용'
          size='sm'
          color='primary'
          interactionVariant='normal'
          fillContainer
          onClick={() => {
            onStartDateChange(selectedStartDate);
            onEndDateChange(selectedEndDate);
            toggle();
          }}
        />
      </S.Wrapper>

      <S.DatePickerPopupWrapper>
        {isStartOpen && (
          <S.DatePickerPopup>
            <DatePicker
              isOpen={isStartOpen}
              selectedDate={selectedStartDate}
              onClose={() => setIsStartOpen(false)}
              onSelect={(date) => {
                onStartDateChange(date);
              }}
            />
          </S.DatePickerPopup>
        )}
        {isEndOpen && (
          <S.DatePickerPopup>
            <DatePicker
              isOpen={isEndOpen}
              selectedDate={selectedEndDate}
              onClose={() => setIsEndOpen(false)}
              onSelect={(date) => {
                onEndDateChange(date);
              }}
            />
          </S.DatePickerPopup>
        )}
      </S.DatePickerPopupWrapper>
    </S.DateSelectWrapper>
  );
}
