import { useState, useEffect } from 'react';

import ChevronUp from '@/assets/icons/chevronup.svg';

import * as S from './Accordion.styled';
import { useAccordionGroup } from '../AccordionGroup/AccordionGroup';

interface AccordionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ id, title, children, defaultOpen = false }: AccordionProps) {
  const groupContext = useAccordionGroup();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    if (groupContext && groupContext.exclusive) {
      setIsOpen(groupContext.activeId === id);
    }
  }, [groupContext?.activeId, id, groupContext?.exclusive]);

  const handleToggle = () => {
    if (groupContext && groupContext.exclusive) {
      groupContext.setActiveId(groupContext.activeId === id ? null : id);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <S.AccordionContainer>
      <S.AccordionHeader onClick={handleToggle}>
        <S.AccordionTitle>{title}</S.AccordionTitle>
        <S.AccordionIcon isOpen={isOpen}>
          <ChevronUp />
        </S.AccordionIcon>
      </S.AccordionHeader>

      <S.AccordionContent isOpen={isOpen}>
        <S.AccordionContentInner>{children}</S.AccordionContentInner>
      </S.AccordionContent>
    </S.AccordionContainer>
  );
}
