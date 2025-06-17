'use client';

import Image from 'next/image';
import * as S from './page.styled';
import { REPORT_IMAGE } from '@/constants/image';
import StreakSummaryCard from './_components/StreakSummaryCard/StreakSummaryCard';
import ContentRecordToggle from './_components/ContentRecordToggle/ContentRecordToggle';

export default function Dashboard() {
  return (
    <S.DashboardContainer>
      <S.TextWrapper>
        <S.StreakWrapper>
          <S.StreakMessage>코그룸과</S.StreakMessage>
          <S.Highlight>71일째</S.Highlight>
          <S.StreakMessage>함께 했어요</S.StreakMessage>
        </S.StreakWrapper>
        <S.GreetingMessage>안녕, 홍길동 코그니어</S.GreetingMessage>
        <S.ChronotypeMessage>올빼미형은 주로 밤에 활기찬 성향을 가지고 있어요</S.ChronotypeMessage>
      </S.TextWrapper>

      <S.Report>
        <Image
          src={REPORT_IMAGE}
          alt='streakBackground'
          fill
          style={{ objectFit: 'cover' }}
        />
      </S.Report>

      <S.SummarySectionWrapper>
        <StreakSummaryCard />
        <ContentRecordToggle />
      </S.SummarySectionWrapper>
    </S.DashboardContainer>
  );
}
