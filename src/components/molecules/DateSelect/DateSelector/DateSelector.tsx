import { Dayjs } from 'dayjs';

import DateIcon from '@/assets/icons/date.svg';
import { formatDayAsSlashYYMMDD } from '@/utils/formatDay';

import * as S from './DateSelector.styled';

interface DateSelectorProps {
  label: string;
  selectedDate: Dayjs | null;
  onClick: () => void;
}

export default function DateSelector({ label, selectedDate, onClick }: DateSelectorProps) {
  return (
    <S.DateSelectWrapper>
      <S.DateLabel>{label}</S.DateLabel>
      <S.DateInputWrapper>
        <S.DateInput>{selectedDate ? formatDayAsSlashYYMMDD(selectedDate) : '년도 / 월 / 일'}</S.DateInput>
        <S.Icon onClick={onClick}>
          <DateIcon />
        </S.Icon>
      </S.DateInputWrapper>
    </S.DateSelectWrapper>
  );
}
