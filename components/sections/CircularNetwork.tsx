import React from 'react';
import { Section, SectionHeader } from '../ui';
import styles from './CircularNetwork.module.css';

export const CircularNetwork: React.FC = () => {
  return (
    <Section variant="light">
      <SectionHeader
        title="Four Platforms, One Community"
        subtitle="Farm, retreat, venue, and housing—each supporting the others."
      />

      <div className={styles.network}>
        <svg viewBox="0 0 500 500" fill="none">
          <defs>
            <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E9AA2"/>
              <stop offset="50%" stopColor="#D47850"/>
              <stop offset="100%" stopColor="#5E9AA2"/>
            </linearGradient>
            <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E5A6A"/>
              <stop offset="100%" stopColor="#15303F"/>
            </linearGradient>
            <linearGradient id="vesselInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0A568"/>
              <stop offset="100%" stopColor="#D47850"/>
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15"/>
            </filter>
          </defs>

          {/* Background pulse rings */}
          <circle cx="250" cy="250" r="220" stroke="#5E9AA2" strokeWidth="1" fill="none" opacity="0.1" className={styles.pulseRing}/>
          <circle cx="250" cy="250" r="200" stroke="#D47850" strokeWidth="0.5" fill="none" opacity="0.08" className={styles.pulseRing} style={{ animationDelay: '1s' }}/>

          {/* Orbit rings */}
          <circle cx="250" cy="250" r="180" stroke="url(#orbitGrad)" strokeWidth="2" fill="none" className={styles.orbitRing} opacity="0.35"/>
          <circle cx="250" cy="250" r="130" stroke="#5E9AA2" strokeWidth="1.5" fill="none" className={styles.orbitRing} opacity="0.2" style={{ animationDirection: 'reverse' }}/>

          {/* Flow lines between nodes */}
          <g stroke="#5E9AA2" strokeWidth="2.5" fill="none" opacity="0.5">
            <path d="M250 70 Q350 150 430 250" className={styles.flowLine}/>
            <path d="M430 250 Q350 350 250 430" className={styles.flowLine} style={{ animationDelay: '0.5s' }}/>
            <path d="M250 430 Q150 350 70 250" className={styles.flowLine} style={{ animationDelay: '1s' }}/>
            <path d="M70 250 Q150 150 250 70" className={styles.flowLine} style={{ animationDelay: '1.5s' }}/>
          </g>

          {/* Center vessel */}
          <g filter="url(#softShadow)">
            <circle cx="250" cy="250" r="52" fill="url(#centerGrad)"/>
            <circle cx="250" cy="250" r="40" fill="#2E5A6A" className={styles.centerPulse}/>
            <path d="M233 233 Q225 250 230 264 Q237 276 250 278 Q263 276 270 264 Q275 250 267 233 Q259 221 250 218 Q241 221 233 233 Z"
                  fill="url(#vesselInnerGrad)"/>
            <ellipse cx="250" cy="221" rx="17" ry="4" fill="#B85A35"/>
            {/* Water shimmer */}
            <ellipse cx="244" cy="248" rx="6" ry="10" fill="white" opacity="0.15"/>
          </g>

          {/* Farm node (top) */}
          <g className={styles.node} filter="url(#softShadow)">
            <circle cx="250" cy="65" r="38" fill="white"/>
            <circle cx="250" cy="65" r="35" fill="#FAF8F5"/>
            <circle cx="250" cy="65" r="32" fill="white" opacity="0.5"/>
            <path d="M238 60 Q234 67 236 75 Q240 83 250 85 Q260 83 264 75 Q266 67 262 60 Q258 53 250 51 Q242 53 238 60 Z" fill="#5A360E"/>
            <path d="M250 67 L250 59" stroke="#5C7C5E" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="250" cy="57" r="4" fill="#6B8E6B"/>
            <circle cx="244" cy="59" r="2.5" fill="#8FBC8F"/>
            <circle cx="256" cy="59" r="2.5" fill="#8FBC8F"/>
          </g>
          <text x="250" y="18" textAnchor="middle" className={styles.label} fill="#5A360E">FARM</text>

          {/* Retreat node (right) */}
          <g className={styles.node} filter="url(#softShadow)">
            <circle cx="435" cy="250" r="38" fill="white"/>
            <circle cx="435" cy="250" r="35" fill="#FAF8F5"/>
            <circle cx="435" cy="250" r="32" fill="white" opacity="0.5"/>
            <path d="M423 245 Q419 252 421 260 Q425 268 435 270 Q445 268 449 260 Q451 252 447 245 Q443 238 435 236 Q427 238 423 245 Z" fill="#4A9199"/>
            <path d="M435 242 Q442 252 442 260 Q442 268 435 268 Q428 268 428 260 Q428 252 435 242 Z" fill="white" opacity="0.4"/>
            <ellipse cx="435" cy="266" rx="6" ry="2.5" fill="white" opacity="0.3"/>
          </g>
          <text x="485" y="255" textAnchor="start" className={styles.label} fill="#4A9199">RETREAT</text>

          {/* Venue node (bottom) */}
          <g className={styles.node} filter="url(#softShadow)">
            <circle cx="250" cy="435" r="38" fill="white"/>
            <circle cx="250" cy="435" r="35" fill="#FAF8F5"/>
            <circle cx="250" cy="435" r="32" fill="white" opacity="0.5"/>
            <path d="M238 432 Q234 440 236 448 Q240 456 250 458 Q260 456 264 448 Q266 440 262 432 Q258 424 250 422 Q242 424 238 432 Z" fill="#D64527"/>
            <path d="M250 428 Q256 438 254 444 Q252 450 250 452 Q248 450 246 444 Q244 438 250 428" fill="#FFD93D" opacity="0.7"/>
            <circle cx="244" cy="436" r="2" fill="#FFD93D" opacity="0.5"/>
            <circle cx="256" cy="434" r="1.5" fill="#FFD93D" opacity="0.5"/>
          </g>
          <text x="250" y="490" textAnchor="middle" className={styles.label} fill="#D64527">VENUE</text>

          {/* Community node (left) */}
          <g className={styles.node} filter="url(#softShadow)">
            <circle cx="65" cy="250" r="38" fill="white"/>
            <circle cx="65" cy="250" r="35" fill="#FAF8F5"/>
            <circle cx="65" cy="250" r="32" fill="white" opacity="0.5"/>
            <path d="M53 245 Q49 252 51 260 Q55 268 65 270 Q75 268 79 260 Q81 252 77 245 Q73 238 65 236 Q57 238 53 245 Z" fill="#C45A15"/>
            <path d="M65 244 L71 250 L71 262 L59 262 L59 250 Z" fill="#8B4513"/>
            <rect x="63" y="256" width="4" height="6" fill="#5D4037"/>
          </g>
          <text x="15" y="255" textAnchor="end" className={styles.label} fill="#C45A15">COMMUNITY</text>

          {/* Animated particles */}
          <circle r="3" fill="#5E9AA2" opacity="0.6" className={styles.particle}>
            <animateMotion dur="8s" repeatCount="indefinite" path="M250 70 Q350 150 430 250 Q350 350 250 430 Q150 350 70 250 Q150 150 250 70"/>
          </circle>
          <circle r="2.5" fill="#D47850" opacity="0.5" className={styles.particle}>
            <animateMotion dur="10s" repeatCount="indefinite" begin="2s" path="M250 70 Q350 150 430 250 Q350 350 250 430 Q150 350 70 250 Q150 150 250 70"/>
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
          <span>Shared Resources</span>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </span>
          <span>Collaboration</span>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </span>
          <span>Mutual Aid</span>
        </div>
      </div>
    </Section>
  );
};
