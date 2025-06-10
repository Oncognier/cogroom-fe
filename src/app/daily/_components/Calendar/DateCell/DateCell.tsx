import { Dayjs } from 'dayjs';
import Image from 'next/image';

import { DEFAULT_WATERDROP } from '@/constants/image';
import { formatDayAsDashYYYYMMDD } from '@/utils/formatDay';

import * as S from './DateCell.styled';

interface DateCellProps {
  date: Dayjs;
  streakDateList: string[];
}

export default function DateCell({ date, streakDateList }: DateCellProps) {
  const streakSet = new Set(streakDateList);
  const isAnswered = streakSet.has(formatDayAsDashYYYYMMDD(date));
  return (
    <S.DateCell isAnswered={isAnswered}>
      {isAnswered ? (
        <Image
          src={DEFAULT_WATERDROP}
          alt='waterdrop'
          width={13}
          height={16}
        />
      ) : (
        date.date()
      )}
    </S.DateCell>
  );
}
