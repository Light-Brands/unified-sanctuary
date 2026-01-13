import React from 'react';
import { Section } from '../ui';
import styles from './Quote.module.css';

interface QuoteProps {
  text?: string;
  attribution?: string;
}

export const Quote: React.FC<QuoteProps> = ({
  text = '"The vessel holds. The water nourishes. The network connects. Together, they create abundance."',
  attribution = 'The Unified Sanctuaries Ethos',
}) => {
  return (
    <Section className={styles.section}>
      {/* Decorative background elements */}
      <div className={styles.decorations}>
        <svg className={styles.decorLeft} viewBox="0 0 100 200" fill="none">
          <path d="M80 0 Q20 50 40 100 Q60 150 20 200" stroke="url(#decorGrad1)" strokeWidth="1.5" fill="none" opacity="0.3"/>
          <path d="M100 20 Q40 70 60 120 Q80 170 40 200" stroke="url(#decorGrad1)" strokeWidth="1" fill="none" opacity="0.2"/>
          <defs>
            <linearGradient id="decorGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5E9AA2" stopOpacity="0"/>
              <stop offset="50%" stopColor="#5E9AA2"/>
              <stop offset="100%" stopColor="#5E9AA2" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className={styles.decorRight} viewBox="0 0 100 200" fill="none">
          <path d="M20 0 Q80 50 60 100 Q40 150 80 200" stroke="url(#decorGrad2)" strokeWidth="1.5" fill="none" opacity="0.3"/>
          <path d="M0 20 Q60 70 40 120 Q20 170 60 200" stroke="url(#decorGrad2)" strokeWidth="1" fill="none" opacity="0.2"/>
          <defs>
            <linearGradient id="decorGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D47850" stopOpacity="0"/>
              <stop offset="50%" stopColor="#D47850"/>
              <stop offset="100%" stopColor="#D47850" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Quote marks */}
      <div className={styles.quoteMarkLeft}>&ldquo;</div>
      <div className={styles.quoteMarkRight}>&rdquo;</div>

      <div className={styles.vessel}>
        <svg viewBox="0 0 70 85" fill="none">
          <defs>
            <linearGradient id="quoteVesselGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0A568"/>
              <stop offset="50%" stopColor="#D47850"/>
              <stop offset="100%" stopColor="#5E9AA2"/>
            </linearGradient>
            <filter id="vesselGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <ellipse cx="35" cy="78" rx="25" ry="5" fill="#5E9AA2" opacity="0.15"/>
          <g filter="url(#vesselGlow)">
            <path d="M17 28 Q9 43 13 58 Q20 73 35 76 Q50 73 57 58 Q61 43 53 28 Q47 17 35 13 Q23 17 17 28 Z"
                  fill="url(#quoteVesselGrad)"/>
            <ellipse cx="35" cy="16" rx="18" ry="5" fill="#B85A35"/>
          </g>
          {/* Inner water shimmer */}
          <ellipse cx="30" cy="45" rx="8" ry="14" fill="white" opacity="0.15"/>
        </svg>
      </div>

      <div className={styles.content}>
        <blockquote>{text}</blockquote>
        <cite>
          <span className={styles.citeLine}></span>
          {attribution}
          <span className={styles.citeLine}></span>
        </cite>
      </div>
    </Section>
  );
};
