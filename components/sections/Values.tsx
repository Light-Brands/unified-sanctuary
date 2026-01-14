import React from 'react';
import { Section, SectionHeader } from '../ui';
import {
  Seedling,
  Globe,
  Scale,
  Hands,
  BookOpen,
  TreePine,
  Sparkles,
  Waves,
} from '../icons';
import styles from './Values.module.css';

const values = [
  { name: 'Regeneration', icon: Seedling, description: 'Give back more than we take' },
  { name: 'Land in Trust', icon: Globe, description: 'Commons, not commodity' },
  { name: 'Equity', icon: Scale, description: 'Value all contributions' },
  { name: 'Participation', icon: Hands, description: 'Decide together' },
  { name: 'Open Source', icon: BookOpen, description: 'Share what we learn' },
  { name: 'Indigenous Wisdom', icon: TreePine, description: 'Honor original stewards' },
  { name: 'Joy', icon: Sparkles, description: 'Celebration heals' },
  { name: 'Resilience', icon: Waves, description: 'Adapt with grace' },
];

export const Values: React.FC = () => {
  return (
    <Section variant="dark">
      <div className={styles.container}>
        <SectionHeader
          title="Our Values"
          subtitle="What guides us"
        />

        <div className={styles.flow}>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.name}
                className={styles.drop}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={20} />
                </div>
                <div className={styles.content}>
                  <span className={styles.name}>{value.name}</span>
                  <span className={styles.description}>{value.description}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative water flow */}
        <div className={styles.waterFlow}>
          <svg viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
            <path
              d="M0 50 Q300 20 600 50 T1200 50"
              stroke="url(#waterGrad)"
              strokeWidth="2"
              fill="none"
              className="network-flow"
            />
            <path
              d="M0 60 Q300 90 600 60 T1200 60"
              stroke="url(#waterGrad)"
              strokeWidth="1.5"
              fill="none"
              className="network-flow"
              style={{ animationDelay: '0.5s' }}
            />
            <defs>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5E9AA2" stopOpacity="0" />
                <stop offset="50%" stopColor="#5E9AA2" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#5E9AA2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </Section>
  );
};
