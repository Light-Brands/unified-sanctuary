import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ArrowRight: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export const ArrowLeft: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

export const Menu: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M3 12h18M3 6h18M3 18h18"/>
  </svg>
);

export const X: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

export const Mail: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 7l-10 5L2 7"/>
  </svg>
);

export const MapPin: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const Instagram: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <path d="M17.5 6.5h.01"/>
  </svg>
);

export const Heart: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

export const Users: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

export const Calendar: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

export const Sprout: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M7 20h10"/>
    <path d="M12 20v-8"/>
    <path d="M12 12c-3 0-5-2-5-5s2-5 5-5c0 3 2 5 5 5s-2 5-5 5z"/>
  </svg>
);

export const Droplet: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
  </svg>
);

export const Home: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

export const Flame: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/>
  </svg>
);

export const Check: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export const ExternalLink: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// Logo component
export const Logo: React.FC<IconProps> = ({ className = '', size = 40 }) => (
  <svg viewBox="0 0 40 40" fill="none" width={size} height={size} className={className}>
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="20" cy="20" r="3" fill="currentColor"/>
    <circle cx="20" cy="8" r="4" fill="#704214"/>
    <circle cx="8" cy="20" r="4" fill="#7BA3A8"/>
    <circle cx="32" cy="20" r="4" fill="#C65D3B"/>
    <circle cx="20" cy="32" r="4" fill="#B5651D"/>
    <path d="M20 12 L20 17 M12 20 L17 20 M20 28 L20 23 M28 20 L23 20" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

// Brand-themed icons for values and features
export const Seedling: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M12 22V13"/>
    <path d="M12 13C12 13 8 9 8 6C8 3.79 9.79 2 12 2C14.21 2 16 3.79 16 6C16 9 12 13 12 13Z"/>
    <path d="M12 17C10 17 8 15.5 8 13"/>
    <path d="M12 17C14 17 16 15.5 16 13"/>
  </svg>
);

export const HandHeart: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M12 8.5C10.5 7 8 7 7 8.5C6 10 7 12 12 15C17 12 18 10 17 8.5C16 7 13.5 7 12 8.5Z"/>
    <path d="M19 14V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V14"/>
    <path d="M3 14L12 21L21 14"/>
  </svg>
);

export const Network: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="3"/>
    <circle cx="4" cy="8" r="2"/>
    <circle cx="20" cy="8" r="2"/>
    <circle cx="4" cy="16" r="2"/>
    <circle cx="20" cy="16" r="2"/>
    <path d="M6 8.5L9.5 10.5M14.5 10.5L18 8.5M6 15.5L9.5 13.5M14.5 13.5L18 15.5"/>
  </svg>
);

export const Vessel: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M6 8C5 10.5 5.5 15 7 18C8.5 21 11 22 12 22C13 22 15.5 21 17 18C18.5 15 19 10.5 18 8"/>
    <ellipse cx="12" cy="7" rx="6" ry="2"/>
    <path d="M9 12C9 12 10 14 12 14C14 14 15 12 15 12" opacity="0.5"/>
  </svg>
);

export const WaterDrop: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M12 2C12 2 6 9 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 9 12 2 12 2Z"/>
    <path d="M9 14C9 14 10 16 12 16" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

export const Sun: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2V4M12 20V22M2 12H4M20 12H22"/>
    <path d="M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"/>
  </svg>
);

export const Leaf: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M6 21C6 21 7 14 12 9C17 4 21 3 21 3C21 3 20 7 15 12C10 17 3 18 3 18"/>
    <path d="M3 18C3 18 4 16 6 14"/>
    <path d="M14 10C14 10 10 14 6 21"/>
  </svg>
);

export const CircleFlow: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="9" strokeDasharray="4 2"/>
    <path d="M12 3V6M21 12H18M12 21V18M3 12H6"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const Hands: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M7 11V7C7 5.9 7.9 5 9 5H10C11.1 5 12 5.9 12 7V11"/>
    <path d="M12 11V7C12 5.9 12.9 5 14 5H15C16.1 5 17 5.9 17 7V11"/>
    <path d="M5 13H19C19 13 20 16 20 18C20 20 18 21 16 21H8C6 21 4 20 4 18C4 16 5 13 5 13Z"/>
  </svg>
);

export const Globe: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="10"/>
    <ellipse cx="12" cy="12" rx="4" ry="10"/>
    <path d="M2 12H22"/>
    <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22"/>
    <path d="M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22"/>
  </svg>
);

export const Sparkles: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M12 3L13 7L17 8L13 9L12 13L11 9L7 8L11 7L12 3Z"/>
    <path d="M5 15L5.5 17L7.5 17.5L5.5 18L5 20L4.5 18L2.5 17.5L4.5 17L5 15Z"/>
    <path d="M19 15L19.5 17L21.5 17.5L19.5 18L19 20L18.5 18L16.5 17.5L18.5 17L19 15Z"/>
  </svg>
);

export const Scale: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M12 3V21"/>
    <path d="M5 7L12 5L19 7"/>
    <path d="M3 11L5 7L7 11C7 12.1 6.1 13 5 13C3.9 13 3 12.1 3 11Z"/>
    <path d="M17 11L19 7L21 11C21 12.1 20.1 13 19 13C17.9 13 17 12.1 17 11Z"/>
    <path d="M8 21H16"/>
  </svg>
);

export const BookOpen: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M2 4C2 4 5 2 9 2C13 2 12 4 12 4V20C12 20 11 18 9 18C7 18 2 20 2 20V4Z"/>
    <path d="M22 4C22 4 19 2 15 2C11 2 12 4 12 4V20C12 20 13 18 15 18C17 18 22 20 22 20V4Z"/>
  </svg>
);

export const TreePine: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M12 3L17 10H14L18 17H6L10 10H7L12 3Z"/>
    <path d="M12 17V22"/>
  </svg>
);

export const Waves: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} className={className}>
    <path d="M2 6C2 6 4 4 7 4C10 4 10 8 13 8C16 8 16 4 19 4C22 4 22 6 22 6"/>
    <path d="M2 12C2 12 4 10 7 10C10 10 10 14 13 14C16 14 16 10 19 10C22 10 22 12 22 12"/>
    <path d="M2 18C2 18 4 16 7 16C10 16 10 20 13 20C16 20 16 16 19 16C22 16 22 18 22 18"/>
  </svg>
);
