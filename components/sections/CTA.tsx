import React from 'react';
import { Section, Button } from '../ui';
import { ArrowRight, Heart } from '../icons';
import styles from './CTA.module.css';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title = 'Be Part of What We\'re Building',
  subtitle = "Whether you want to live on the land, contribute skills, or support from afar, there's a place for you here.",
  primaryText = 'Get Involved',
  primaryHref = '/get-involved',
  secondaryText = 'Support the Vision',
  secondaryHref = '/support',
}) => {
  return (
    <Section variant="light" className={styles.section}>
      {/* Background decoration */}
      <div className={styles.bgPattern}>
        <svg viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none">
          <path
            d="M0 100 Q300 50 600 100 T1200 100"
            stroke="url(#ctaGrad)"
            strokeWidth="2"
            fill="none"
            className={styles.flowLine}
          />
          <path
            d="M0 120 Q300 170 600 120 T1200 120"
            stroke="url(#ctaGrad)"
            strokeWidth="1.5"
            fill="none"
            className={styles.flowLine}
            style={{ animationDelay: '0.5s' }}
          />
          <defs>
            <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E9AA2" stopOpacity="0"/>
              <stop offset="50%" stopColor="#5E9AA2" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#5E9AA2" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
            <circle cx="30" cy="30" r="28" fill="white" stroke="#5E9AA2" strokeWidth="1" strokeDasharray="4 2"/>
            <circle cx="30" cy="30" r="20" fill="linear-gradient(135deg, #5E9AA2, #D47850)"/>
            <path d="M22 28 Q18 35 20 42 Q24 50 30 52 Q36 50 40 42 Q42 35 38 28 Q34 22 30 20 Q26 22 22 28 Z"
                  fill="url(#ctaVesselGrad)"/>
            <defs>
              <linearGradient id="ctaVesselGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0A568"/>
                <stop offset="100%" stopColor="#D47850"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h2>{title}</h2>
        <p>{subtitle}</p>

        <div className={styles.buttons}>
          <Button href={primaryHref} size="lg">
            {primaryText}
            <ArrowRight size={18} />
          </Button>
          <Button href={secondaryHref} variant="secondary" size="lg">
            <Heart size={16} />
            {secondaryText}
          </Button>
        </div>
      </div>
    </Section>
  );
};
