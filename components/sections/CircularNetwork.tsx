import React from 'react';
import { Section, SectionHeader } from '../ui';
import styles from './CircularNetwork.module.css';

export const CircularNetwork: React.FC = () => {
  return (
    <Section variant="light">
      <SectionHeader
        title="Four Platforms, One Community"
        subtitle="A farm, retreat center, event venue, and living space—each strengthening the others through shared stewardship."
      />

      <div className={styles.network}>
        <svg viewBox="0 0 600 400" fill="none">
          <defs>
            <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E9AA2"/>
              <stop offset="100%" stopColor="#7AB5BD"/>
            </linearGradient>
            <linearGradient id="vesselBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D47850"/>
              <stop offset="100%" stopColor="#C45A15"/>
            </linearGradient>
            <linearGradient id="vesselInnerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2E5A6A"/>
              <stop offset="100%" stopColor="#3D7A8A"/>
            </linearGradient>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15"/>
            </filter>
          </defs>

          {/* Main source vessel (top left) */}
          <g filter="url(#softShadow)">
            {/* Vessel body */}
            <path d="M70 40 Q40 70 45 115 Q50 160 90 170 Q130 160 135 115 Q140 70 110 40 Q95 30 90 30 Q85 30 70 40 Z"
                  fill="url(#vesselBodyGrad)"/>
            {/* Vessel rim */}
            <ellipse cx="90" cy="35" rx="30" ry="8" fill="#B85A35"/>
            {/* Inner dark area (representing depth/water) */}
            <ellipse cx="90" cy="100" rx="35" ry="45" fill="url(#vesselInnerGrad)"/>
          </g>

          {/* Flowing stream from vessel to distribution point */}
          <g className={styles.flowStream}>
            <path d="M135 100 Q200 80 280 120 Q340 150 300 220"
                  stroke="url(#streamGrad)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.9"/>
            <path d="M135 100 Q200 80 280 120 Q340 150 300 220"
                  stroke="#7AB5BD"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"/>
          </g>

          {/* Distribution point (where stream meets lines) */}
          <circle cx="300" cy="220" r="4" fill="#5E9AA2"/>

          {/* Connecting dashed lines to each platform */}
          <g stroke="#5E9AA2" strokeWidth="2" strokeDasharray="8 6" fill="none" opacity="0.6">
            {/* Line to Farm */}
            <line x1="300" y1="220" x2="100" y2="310" className={styles.connectionLine}/>
            {/* Line to Retreat */}
            <line x1="300" y1="220" x2="233" y2="310" className={styles.connectionLine}/>
            {/* Line to Venue */}
            <line x1="300" y1="220" x2="367" y2="310" className={styles.connectionLine}/>
            {/* Line to Community */}
            <line x1="300" y1="220" x2="500" y2="310" className={styles.connectionLine}/>
          </g>

          {/* Farm vessel */}
          <g className={styles.node} filter="url(#softShadow)">
            <path d="M80 310 Q65 325 68 345 Q72 365 100 370 Q128 365 132 345 Q135 325 120 310 Q108 300 100 300 Q92 300 80 310 Z"
                  fill="#6B5344"/>
            <ellipse cx="100" cy="305" rx="18" ry="5" fill="#5A4539"/>
            {/* Sprout icon */}
            <line x1="100" y1="340" x2="100" y2="325" stroke="#5C7C5E" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="100" cy="322" r="4" fill="#6B8E6B"/>
          </g>
          <text x="100" y="395" textAnchor="middle" className={styles.label} fill="#5A360E">Farm</text>

          {/* Retreat vessel */}
          <g className={styles.node} filter="url(#softShadow)">
            <path d="M213 310 Q198 325 201 345 Q205 365 233 370 Q261 365 265 345 Q268 325 253 310 Q241 300 233 300 Q225 300 213 310 Z"
                  fill="#5E9AA2"/>
            <ellipse cx="233" cy="305" rx="18" ry="5" fill="#4A8890"/>
            {/* Water drop icon */}
            <path d="M233 325 Q240 335 238 345 Q235 352 233 352 Q231 352 228 345 Q226 335 233 325 Z" fill="#7AB5BD" opacity="0.6"/>
          </g>
          <text x="233" y="395" textAnchor="middle" className={styles.label} fill="#4A9199">Retreat</text>

          {/* Venue vessel */}
          <g className={styles.node} filter="url(#softShadow)">
            <path d="M347 310 Q332 325 335 345 Q339 365 367 370 Q395 365 399 345 Q402 325 387 310 Q375 300 367 300 Q359 300 347 310 Z"
                  fill="#D47850"/>
            <ellipse cx="367" cy="305" rx="18" ry="5" fill="#C45A15"/>
            {/* Flame icon */}
            <path d="M367 325 Q374 335 372 343 Q370 350 367 352 Q364 350 362 343 Q360 335 367 325 Z" fill="#E8A86D" opacity="0.8"/>
          </g>
          <text x="367" y="395" textAnchor="middle" className={styles.label} fill="#D64527">Venue</text>

          {/* Community vessel */}
          <g className={styles.node} filter="url(#softShadow)">
            <path d="M480 310 Q465 325 468 345 Q472 365 500 370 Q528 365 532 345 Q535 325 520 310 Q508 300 500 300 Q492 300 480 310 Z"
                  fill="#D47850"/>
            <ellipse cx="500" cy="305" rx="18" ry="5" fill="#C45A15"/>
            {/* House icon */}
            <path d="M500 328 L508 336 L508 348 L492 348 L492 336 Z" fill="#8B4513"/>
            <path d="M500 328 L492 336 L508 336 Z" fill="#A0522D"/>
          </g>
          <text x="500" y="395" textAnchor="middle" className={styles.label} fill="#C45A15">Community</text>

          {/* Animated droplet along stream */}
          <circle r="4" fill="#7AB5BD" opacity="0.7" className={styles.droplet}>
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M135 100 Q200 80 280 120 Q340 150 300 220"
            />
          </circle>
        </svg>
      </div>

      {/* Info badges */}
      <div className={styles.badges}>
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </span>
          <span>Resource Sharing</span>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </span>
          <span>Ongoing Collaboration</span>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </span>
          <span>Mutual Support</span>
        </div>
      </div>
    </Section>
  );
};
