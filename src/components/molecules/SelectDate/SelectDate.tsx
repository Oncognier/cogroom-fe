'use client';

import { Dayjs } from 'dayjs';

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

  return (
    <S.SelectDateWrapper>
      <S.InputContainer
        isOpen={isOpen}
        onClick={toggle}
      >
        <S.TriggerInput
          type='text'
          readOnly
          value={formatDateRangeLabel(selectedStartDate, selectedEndDate)}
          placeholder={'날짜 선택'}
        />

        <S.IconWrapper isOpen={isOpen}>{isOpen ? <ChevronUp /> : <ChevronDown />}</S.IconWrapper>
      </S.InputContainer>

      {isOpen && (
        <S.DatePopup>
          <DateSelect
            selectedStartDate={selectedStartDate}
            selectedEndDate={selectedEndDate}
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
            toggle={toggle}
          />
        </S.DatePopup>
      )}
    </S.SelectDateWrapper>
  );
}
