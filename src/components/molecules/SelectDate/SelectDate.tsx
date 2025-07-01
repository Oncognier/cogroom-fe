'use client';

import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import DateSelect from '@/components/molecules/DateSelect/DateSelect';
import { useDropdown } from '@/hooks/useDropdown';
import { formatDateRangeLabel } from '@/utils/formatDay';

import * as S from './SelectDate.styled';

export default function SelectDate({
  selectedStartDate,
  selectedEndDate,
  onStartDateChange,
  onEndDateChange,
}: {
  selectedStartDate: Dayjs | null;
  selectedEndDate: Dayjs | null;
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
}) {
  const { isOpen, toggle } = useDropdown();
  const [draftStart, setDraftStart] = useState<Dayjs | null>(selectedStartDate);
  const [draftEnd, setDraftEnd] = useState<Dayjs | null>(selectedEndDate);

  useEffect(() => {
    if (isOpen) {
      setDraftStart(selectedStartDate);
      setDraftEnd(selectedEndDate);
    }
  }, [isOpen]);

  const handleApply = () => {
    onStartDateChange(draftStart);
    onEndDateChange(draftEnd);
    toggle();
  };

  return (
    <S.SelectDateWrapper>
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
          <DateSelect
            selectedStartDate={draftStart}
            selectedEndDate={draftEnd}
            onStartDateChange={setDraftStart}
            onEndDateChange={setDraftEnd}
            onApply={handleApply}
          />
        </S.DatePopup>
      )}
    </S.SelectDateWrapper>
  );
}
