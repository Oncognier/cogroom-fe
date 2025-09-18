'use client';

import { redirect } from 'next/navigation';

export default function Likes() {
  redirect('/mypage/community/likes/posts');
}
