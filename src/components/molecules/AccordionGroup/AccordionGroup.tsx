import { useState, createContext, useContext } from 'react';

interface AccordionGroupContextType {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  exclusive: boolean;
}

const AccordionGroupContext = createContext<AccordionGroupContextType | null>(null);

export const useAccordionGroup = () => {
  const context = useContext(AccordionGroupContext);
  return context;
};

interface AccordionGroupProps {
  children: React.ReactNode;
  exclusive?: boolean;
  defaultActiveId?: string | null;
}

export default function AccordionGroup({ children, exclusive = false, defaultActiveId = null }: AccordionGroupProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultActiveId);

  const handleSetActiveId = (id: string | null) => {
    if (exclusive) {
      setActiveId(activeId === id ? null : id);
    } else {
      setActiveId(id);
    }
  };

  return (
    <AccordionGroupContext.Provider
      value={{
        activeId,
        setActiveId: handleSetActiveId,
        exclusive,
      }}
    >
      {children}
    </AccordionGroupContext.Provider>
  );
}
