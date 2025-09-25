import DateIcon from '@/assets/icons/date.svg';
import { formatDayAsSlashYYMMDD } from '@/utils/date/formatDay';

import * as S from './DateInputField.styled';

interface DateInputFieldProps {
  label: string;
  selectedDate: Date | null;
  onClick: () => void;
}

export default function DateInputField({ label, selectedDate, onClick }: DateInputFieldProps) {
  return (
    <S.DateInputField>
      <S.DateLabel>{label}</S.DateLabel>
      <S.DateInputWrapper>
        <S.DateInput>{selectedDate ? formatDayAsSlashYYMMDD(selectedDate) : '년도 / 월 / 일'}</S.DateInput>
        <S.Icon onClick={onClick}>
          <DateIcon />
        </S.Icon>
      </S.DateInputWrapper>
    </S.DateInputField>
  );
}
