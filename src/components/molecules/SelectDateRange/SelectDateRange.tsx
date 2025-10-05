'use client';

import { useEffect, useState } from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import DateRangePanel from '@/components/molecules/DateRangePanel/DateRangePanel';
import { useDropdown } from '@/hooks/useDropdown';
import { formatDateRangeLabel } from '@/utils/date/formatDay';

import * as S from './SelectDateRange.styled';

interface SelectDateRangeProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

export default function SelectDateRange({
  selectedStartDate,
  selectedEndDate,
  onStartDateChange,
  onEndDateChange,
}: SelectDateRangeProps) {
  const { isOpen, toggle } = useDropdown();
  const [draftStart, setDraftStart] = useState<Date | null>(selectedStartDate);
  const [draftEnd, setDraftEnd] = useState<Date | null>(selectedEndDate);

  useEffect(() => {
    if (isOpen) {
      setDraftStart(selectedStartDate);
      setDraftEnd(selectedEndDate);
    }
  }, [isOpen, selectedStartDate, selectedEndDate]);

  const handleApply = () => {
    onStartDateChange(draftStart);
    onEndDateChange(draftEnd);
    toggle();
  };

  return (
    <S.SelectDateRangeWrapper>
      <S.InputContainer
        isOpen={isOpen}
        onClick={toggle}
      >
        <S.TriggerInput
          readOnly
          value={formatDateRangeLabel(selectedStartDate, selectedEndDate)}
          placeholder='날짜 선택'
        />
        <S.IconWrapper isOpen={isOpen}>{isOpen ? <ChevronUp /> : <ChevronDown />}</S.IconWrapper>
      </S.InputContainer>

      {isOpen && (
        <S.DatePopup>
          <DateRangePanel
            selectedStartDate={draftStart}
            selectedEndDate={draftEnd}
            onStartDateChange={setDraftStart}
            onEndDateChange={setDraftEnd}
            onApply={handleApply}
          />
        </S.DatePopup>
      )}
    </S.SelectDateRangeWrapper>
  );
}
