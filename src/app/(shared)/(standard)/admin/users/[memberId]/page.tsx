import { redirect } from 'next/navigation';

interface MemberDetailProps {
  params: {
    memberId: string;
  };
}

export default function MemberDetail({ params }: MemberDetailProps) {
  redirect(`/admin/users/${params.memberId}/daily`);
}
