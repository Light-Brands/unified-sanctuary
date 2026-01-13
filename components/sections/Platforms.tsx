import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader, Card } from '../ui';
import { ArrowRight } from '../icons';
import styles from './Platforms.module.css';

const platforms = [
  {
    id: 'farm',
    name: 'Permaculture Farm',
    description: 'Regenerative agriculture and food sovereignty',
    features: ['Organic produce', 'Education programs', 'CSA membership'],
    href: '/vision#farm',
  },
  {
    id: 'retreat',
    name: 'Retreat & Healing',
    description: 'Immersive wellness sanctuary',
    features: ['Wellness retreats', 'Healing arts', 'Bathhouse & spa'],
    href: '/vision#retreat',
  },
  {
    id: 'venue',
    name: 'Event Venue',
    description: 'Gatherings and celebrations',
    features: ['Weddings & events', 'Festivals', 'Community markets'],
    href: '/vision#venue',
  },
  {
    id: 'community',
    name: 'Community Living',
    description: '20+ homes woven together',
    features: ['Diverse housing', 'Shared spaces', 'Residency paths'],
    href: '/vision#community',
  },
] as const;

export const Platforms: React.FC = () => {
  return (
    <Section variant="gradient">
      <SectionHeader
        title="Four Vessels, One Purpose"
        subtitle="Each holds something essential for the whole"
      />

      <div className={styles.grid}>
        {platforms.map((platform, index) => (
          <Link
            key={platform.id}
            href={platform.href}
            className={styles.cardLink}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card variant="platform" platform={platform.id}>
              <div className={styles.vessel}>
                <PlatformIcon platform={platform.id} />
              </div>
              <h3 className={styles.title}>{platform.name}</h3>
              <p className={styles.description}>{platform.description}</p>
              <ul className={styles.features}>
                {platform.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <span className={styles.linkText}>
                Learn more <ArrowRight size={14} />
              </span>
            </Card>
          </Link>
        ))}
      </div>

      {/* Connection lines decoration */}
      <div className={styles.connections}>
        <svg viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
          <path
            d="M150 40 Q350 10 600 40 T1050 40"
            stroke="url(#connGrad)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 4"
            className="network-flow"
          />
          <circle cx="150" cy="40" r="6" fill="var(--color-farm)" />
          <circle cx="450" cy="25" r="6" fill="var(--color-retreat)" />
          <circle cx="750" cy="55" r="6" fill="var(--color-venue)" />
          <circle cx="1050" cy="40" r="6" fill="var(--color-community)" />
          <defs>
            <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5A360E" />
              <stop offset="33%" stopColor="#4A9199" />
              <stop offset="66%" stopColor="#D64527" />
              <stop offset="100%" stopColor="#C45A15" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Section>
  );
};

interface PlatformIconProps {
  platform: 'farm' | 'retreat' | 'venue' | 'community';
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ platform }) => {
  switch (platform) {
    case 'farm':
      return (
        <svg viewBox="0 0 80 100" fill="none" className={styles.vesselSvg}>
          <defs>
            <linearGradient id="farmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#704214" />
              <stop offset="100%" stopColor="#5A360E" />
            </linearGradient>
          </defs>
          <ellipse cx="40" cy="88" rx="30" ry="6" fill="#5E9AA2" opacity="0.15" className={styles.shadow} />
          <path d="M20 35 Q12 50 16 68 Q22 85 40 88 Q58 85 64 68 Q68 50 60 35 Q52 22 40 18 Q28 22 20 35 Z" fill="url(#farmGrad)" />
          <ellipse cx="40" cy="20" rx="20" ry="5" fill="#8B5A2B" />
          <g className={styles.vesselDecor}>
            <path d="M40 48 L40 30" stroke="#6B8E6B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="40" cy="27" r="5" fill="#6B8E6B" />
            <path d="M40 40 Q32 36 28 26" stroke="#6B8E6B" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M40 40 Q48 36 52 26" stroke="#6B8E6B" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="32" cy="28" r="3" fill="#8FBC8F" />
            <circle cx="48" cy="28" r="3" fill="#8FBC8F" />
          </g>
        </svg>
      );
    case 'retreat':
      return (
        <svg viewBox="0 0 80 100" fill="none" className={styles.vesselSvg}>
          <defs>
            <linearGradient id="retreatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5AAFB8" />
              <stop offset="100%" stopColor="#4A9199" />
            </linearGradient>
          </defs>
          <ellipse cx="40" cy="88" rx="30" ry="6" fill="#5E9AA2" opacity="0.15" className={styles.shadow} />
          <path d="M20 35 Q12 50 16 68 Q22 85 40 88 Q58 85 64 68 Q68 50 60 35 Q52 22 40 18 Q28 22 20 35 Z" fill="url(#retreatGrad)" />
          <ellipse cx="40" cy="20" rx="20" ry="5" fill="#3D7A82" />
          <g className={styles.vesselDecor}>
            <path d="M40 28 Q52 42 52 55 Q52 68 40 68 Q28 68 28 55 Q28 42 40 28 Z" fill="white" opacity="0.35" />
            <ellipse cx="40" cy="66" rx="10" ry="4" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
            <circle cx="35" cy="42" r="2" fill="white" opacity="0.3" />
            <circle cx="46" cy="48" r="1.5" fill="white" opacity="0.3" />
          </g>
        </svg>
      );
    case 'venue':
      return (
        <svg viewBox="0 0 80 100" fill="none" className={styles.vesselSvg}>
          <defs>
            <linearGradient id="venueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E85A3C" />
              <stop offset="100%" stopColor="#D64527" />
            </linearGradient>
            <linearGradient id="flameGrad" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#E8A84C" />
              <stop offset="100%" stopColor="#FFD93D" />
            </linearGradient>
          </defs>
          <ellipse cx="40" cy="88" rx="30" ry="6" fill="#D47850" opacity="0.15" className={styles.shadow} />
          <path d="M20 38 Q12 52 16 70 Q22 87 40 90 Q58 87 64 70 Q68 52 60 38 Q52 26 40 22 Q28 26 20 38 Z" fill="url(#venueGrad)" />
          <ellipse cx="40" cy="24" rx="20" ry="5" fill="#B03A1F" />
          <g className={styles.vesselDecor}>
            <path d="M40 34 Q50 50 47 60 Q44 68 40 72 Q36 68 33 60 Q30 50 40 34" fill="url(#flameGrad)" opacity="0.85" />
            <circle cx="32" cy="44" r="3" fill="#FFD93D" opacity="0.5" className={styles.spark} />
            <circle cx="48" cy="42" r="2" fill="#FFD93D" opacity="0.5" className={styles.spark} />
            <circle cx="36" cy="52" r="1.5" fill="#FFD93D" opacity="0.4" className={styles.spark} />
          </g>
        </svg>
      );
    case 'community':
      return (
        <svg viewBox="0 0 80 100" fill="none" className={styles.vesselSvg}>
          <defs>
            <linearGradient id="communityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4702A" />
              <stop offset="100%" stopColor="#C45A15" />
            </linearGradient>
          </defs>
          <ellipse cx="40" cy="88" rx="30" ry="6" fill="#C45A15" opacity="0.15" className={styles.shadow} />
          <path d="M20 35 Q12 50 16 68 Q22 85 40 88 Q58 85 64 68 Q68 50 60 35 Q52 22 40 18 Q28 22 20 35 Z" fill="url(#communityGrad)" />
          <ellipse cx="40" cy="20" rx="20" ry="5" fill="#9A4510" />
          <g className={styles.vesselDecor}>
            <path d="M40 32 L50 42 L50 60 L30 60 L30 42 Z" fill="#8B5A2B" />
            <rect x="36" y="50" width="8" height="10" fill="#5D4037" />
            <rect x="43" y="44" width="4" height="4" fill="#87CEEB" opacity="0.5" />
            <path d="M24 48 L28 44 L32 48 L32 60 L24 60 Z" fill="#8B5A2B" opacity="0.8" />
            <path d="M48 48 L52 44 L56 48 L56 60 L48 60 Z" fill="#8B5A2B" opacity="0.8" />
            <rect x="26" y="52" width="3" height="3" fill="#87CEEB" opacity="0.4" />
            <rect x="51" y="52" width="3" height="3" fill="#87CEEB" opacity="0.4" />
          </g>
        </svg>
      );
  }
};
