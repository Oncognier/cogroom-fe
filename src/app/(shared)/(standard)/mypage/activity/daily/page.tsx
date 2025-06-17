'use client';

import useGetUserDailyQuery from '@/hooks/api/member/useGetUserDaily';

import DailyQuestionCard from './_components/DailyQuestionCard/DailyQuestionCard';
import * as S from './page.styled';

export default function Daily() {
  const { data, isLoading } = useGetUserDailyQuery();

  if (isLoading) return <div>로딩 중...</div>;
  if (!data?.length) return <div>데일리 질문이 없습니다.</div>;

  return (
    <S.DailyContainer>
      {data.map(({ question, answer, assignedDate }, index) => (
        <DailyQuestionCard
          key={assignedDate}
          question={question}
          answer={answer}
          assignedDate={assignedDate}
          initialOpen={index === 0}
        />
      ))}
    </S.DailyContainer>
  );
}
