import dayjs from 'dayjs';
import Image from 'next/image';

import { DEFAULT_WATERDROP } from '@/constants/image';
import { formatDayAsSlashYYMMDD } from '@/utils/formatDay';

import * as S from './Streak.styled';

interface StreakProps {
  dailyStreak: number;
}

export default function Streak({ dailyStreak }: StreakProps) {
  const today = dayjs();

  return (
    <S.StreakCard>
      <S.ContentWrapper>
        <S.CountWrapper>
          <Image
            src={DEFAULT_WATERDROP}
            alt='waterdrop'
            width={11}
            height={14}
          />
          <p>{dailyStreak}</p>
        </S.CountWrapper>
        <S.MessageWrapper>
          <S.MessageContinue>연속</S.MessageContinue>
          <S.MessageDate>{dailyStreak}일째</S.MessageDate>
          <S.Message>꾸준히 하고 계시네요, 앞으로도 저희와 함께 해요!</S.Message>
        </S.MessageWrapper>

        <S.DateText>{formatDayAsSlashYYMMDD(today)}</S.DateText>
      </S.ContentWrapper>
    </S.StreakCard>
  );
}
