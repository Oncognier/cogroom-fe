'use client';

import Image from 'next/image';

import { REPORT_IMAGE } from '@/constants/image';
import useGetUserDashboardQuery from '@/hooks/api/member/useGetUserDashboard';

import ContentRecordToggle from './_components/ContentRecordToggle/ContentRecordToggle';
import StreakSummaryCard from './_components/StreakSummaryCard/StreakSummaryCard';
import * as S from './page.styled';

export default function Dashboard() {
  const { data, isLoading } = useGetUserDashboardQuery();

  if (isLoading) return <div> Loading...</div>;

  return (
    <S.DashboardContainer>
      <S.TextWrapper>
        <S.StreakWrapper>
          <S.StreakMessage>코그룸과</S.StreakMessage>
          <S.Highlight>{data?.signupDays}일째</S.Highlight>
          <S.StreakMessage>함께 했어요</S.StreakMessage>
        </S.StreakWrapper>
        <S.GreetingMessage>안녕, {data?.nickname} 코그니어</S.GreetingMessage>
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
        <StreakSummaryCard streakDays={data?.streakDays} />
        <ContentRecordToggle />
      </S.SummarySectionWrapper>
    </S.DashboardContainer>
  );
}
