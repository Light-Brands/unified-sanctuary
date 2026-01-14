'use client';

import React, { useState, ReactNode } from 'react';
import styles from './Accordion.module.css';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  icon?: ReactNode;
  subtitle?: string;
  badge?: string;
}

interface AccordionProps {
  children: ReactNode;
  allowMultiple?: boolean;
  className?: string;
  variant?: 'default' | 'card' | 'minimal';
}

interface AccordionContextType {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = true,
  className = '',
  variant = 'default',
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={`${styles.accordion} ${styles[variant]} ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
  icon,
  subtitle,
  badge,
}) => {
  const context = React.useContext(AccordionContext);
  const [itemId] = useState(() => Math.random().toString(36).substr(2, 9));
  const [initialized, setInitialized] = useState(false);

  React.useEffect(() => {
    if (!initialized && defaultOpen && context) {
      context.toggleItem(itemId);
      setInitialized(true);
    }
  }, [defaultOpen, itemId, context, initialized]);

  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }

  const isOpen = context.openItems.has(itemId);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      context.toggleItem(itemId);
    }
  };

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => context.toggleItem(itemId)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        type="button"
      >
        <div className={styles.triggerContent}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <div className={styles.titleWrapper}>
            <span className={styles.title}>{title}</span>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          </div>
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>
        <span className={styles.chevron}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
};
