'use client';

import { redirect } from 'next/navigation';

import { ADMIN_NAV_ITEMS } from '@/constants/common';

export default function Admin() {
  redirect(ADMIN_NAV_ITEMS[0].href);
}
