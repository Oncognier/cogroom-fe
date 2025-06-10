import Link from 'next/link';

import * as S from './Breadcrumb.styled';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <S.Breadcrumb>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <S.BreadcrumbItem key={item.href}>
            {isLast ? <p>{item.name}</p> : <Link href={item.href}>{item.name}</Link>}
            {!isLast && <S.BreadcrumbChevron />}
          </S.BreadcrumbItem>
        );
      })}
    </S.Breadcrumb>
  );
}
