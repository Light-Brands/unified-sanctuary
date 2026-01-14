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
  { name: 'Regeneration', icon: Seedling, description: 'Giving back more than we take' },
  { name: 'Non-Speculative Land', icon: Globe, description: 'Land as commons, not commodity' },
  { name: 'Equity Through Contribution', icon: Scale, description: 'Value all forms of giving' },
  { name: 'Participatory Governance', icon: Hands, description: 'Decisions by those affected' },
  { name: 'Open-Source Sharing', icon: BookOpen, description: 'Knowledge freely shared' },
  { name: 'Indigenous Wisdom', icon: TreePine, description: 'Honoring original stewards' },
  { name: 'Joy as Medicine', icon: Sparkles, description: 'Celebration heals community' },
  { name: 'Flexibility & Resilience', icon: Waves, description: 'Adapting with grace' },
];

export const Values: React.FC = () => {
  return (
    <Section variant="dark">
      <div className={styles.container}>
        <SectionHeader
          title="Rooted in Values"
          subtitle="The principles that guide everything we do"
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
