import { redirect } from 'next/navigation';

export default function MemberDetail({ params }: { params: { memberId: string } }) {
  redirect(`/admin/users/${params.memberId}/daily`);
}
