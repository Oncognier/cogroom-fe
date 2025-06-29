import { useQuery } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { MemberDailyQuestionsRequest } from '@/types/admin';

export default function useGetMemberDailyQuestions({
  memberId,
  params,
}: {
  memberId: string;
  params: MemberDailyQuestionsRequest;
}) {
  return useQuery({
    queryKey: [...ADMIN_QUERY_KEYS.ADMIN_MEMBER_LIST, memberId, params],
    queryFn: () => adminApi.getMemberDailyQuestions({ memberId, params }),
  });
}
