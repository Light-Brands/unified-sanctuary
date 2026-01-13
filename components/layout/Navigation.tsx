'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo, Menu, X, ArrowRight } from '../icons';
import styles from './Navigation.module.css';

interface NavItem {
  label: string;
  href: string;
  description?: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '/about', description: 'Our story and team' },
  { label: 'Vision', href: '/vision', description: 'Four platforms, one purpose' },
  { label: 'Governance', href: '/governance', description: 'How we make decisions' },
  { label: 'Get Involved', href: '/get-involved', description: 'Join the community' },
  { label: 'Support', href: '/support', description: 'Help grow the vision' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname?.startsWith(href);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <Logo size={38} />
        <span className={styles.logoText}>Unified Sanctuaries</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className={styles.links}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${styles.link} ${isActive(item.href) ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span className={styles.menuIcon}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </span>
      </button>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileLinks}>
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={styles.mobileItem}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link
                  href={item.href}
                  className={`${styles.mobileLink} ${isActive(item.href) ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={styles.mobileLinkContent}>
                    <span className={styles.mobileLinkLabel}>{item.label}</span>
                    {item.description && (
                      <span className={styles.mobileLinkDesc}>{item.description}</span>
                    )}
                  </span>
                  <ArrowRight size={16} className={styles.mobileLinkArrow} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu footer */}
          <div className={styles.mobileFooter}>
            <p>Regenerative Community in Vermont</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
