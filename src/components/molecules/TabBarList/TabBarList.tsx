'use client';

import { usePathname, useRouter } from 'next/navigation';

import TabBar from '@/components/atoms/TabBar/TabBar';
import { InteractionVariant } from '@/styles/interaction';
import { TabBarState } from '@/components/atoms/TabBar/TabBar.styled';

import * as S from './TabBarList.styled';

interface TabBarItem {
  label: string;
  href: string;
  state?: TabBarState;
}

interface TabBarListProps {
  items: TabBarItem[];
  size?: 'sm' | 'md';
  fillContainer?: boolean;
  interactionVariant: InteractionVariant;
}

export default function TabBarList({ items, size = 'sm', fillContainer = false, interactionVariant }: TabBarListProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabClick = (href: string) => {
    if (pathname !== href) {
      router.push(href);
    }
  };

  return (
    <S.Container>
      {items.map((item) => (
        <TabBar
          key={item.href}
          label={item.label}
          onChange={() => handleTabClick(item.href)}
          size={size}
          state={item.state}
          fillContainer={fillContainer}
          interactionVariant={interactionVariant}
        />
      ))}
    </S.Container>
  );
}
