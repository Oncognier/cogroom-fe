import Image from 'next/image';

import { DEFAULT_WATERDROP } from '@/constants/image';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import * as S from './DataCell.styled';

interface DateCellProps {
  dateData: string;
  streakDateList: string[];
}

export default function DateCell({ dateData, streakDateList }: DateCellProps) {
  const date = new Date(dateData);
  const streakSet = new Set(streakDateList.map((date) => formatDayAsDashYYYYMMDD(date)));
  const isAnswered = streakSet.has(dateData);

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
        date.getDate()
      )}
    </S.DateCell>
  );
}
