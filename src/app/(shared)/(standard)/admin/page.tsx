import { redirect } from 'next/navigation';

// TODO: 사용자 정보 가져와서 redirect 조건 분기 처리
// 콘텐츠 제공자일 때는 콘텐츠 쪽으로
export default function Admin() {
  redirect('/admin/notices');
}
