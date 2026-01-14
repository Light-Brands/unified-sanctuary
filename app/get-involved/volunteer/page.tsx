import type { Metadata } from 'next';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Give time and skills. Earn Unified Tokens.',
};

const currentNeeds = [
  {
    category: 'Research',
    icon: '🔍',
    opportunities: [
      'Land search',
      'Zoning research',
      'Grant writing',
    ],
  },
  {
    category: 'Creative',
    icon: '🎨',
    opportunities: [
      'Website and design',
      'Content creation',
      'Video and photography',
    ],
  },
  {
    category: 'Professional',
    icon: '📋',
    opportunities: [
      'Legal advising',
      'Financial advising',
      'Fundraising',
    ],
  },
  {
    category: 'Design',
    icon: '🏗️',
    opportunities: [
      'Permaculture',
      'Natural building',
      'Event planning',
    ],
  },
];

const contributionPrograms = [
  {
    title: 'Skill Volunteering',
    description: 'Project-based expertise.',
    commitment: '2-10 hrs/month',
    tokens: '10-50 UT/month',
  },
  {
    title: 'Work Exchange',
    description: 'Skills for room and board.',
    commitment: '20-25 hrs/week',
    tokens: 'Room + Board + 25 UT/week',
  },
  {
    title: 'Workshop Leader',
    description: 'Lead building workshops.',
    commitment: 'Per workshop',
    tokens: '100+ UT/workshop',
  },
  {
    title: 'Platform Steward',
    description: 'Manage a core platform.',
    commitment: '15-30 hrs/week',
    tokens: 'Negotiated + Trust Units',
  },
];

const tokenBenefits = [
  'Farm produce and goods',
  'Healing arts sessions',
  'Workshops and retreats',
  'Event tickets',
  'Community exchanges',
  'Residency credits',
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Volunteer</p>
          <h1>Build Together</h1>
          <p className={styles.lead}>
            Every hand helps. Earn Unified Tokens for your contributions.
          </p>
        </div>
      </Section>

      {/* Current Needs */}
      <Section id="current-needs">
        <SectionHeader
          title="Current Needs"
          subtitle="Where we need help"
        />

        <div className={styles.needsGrid}>
          {currentNeeds.map((category) => (
            <div key={category.category} className={styles.needsCard}>
              <div className={styles.needsHeader}>
                <span className={styles.needsIcon}>{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              <ul className={styles.opportunityList}>
                {category.opportunities.map((opportunity, i) => (
                  <li key={i}>
                    <Check size={14} />
                    {opportunity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.ctaBlock}>
          <p>Have other skills? We&apos;re open.</p>
          <Button href="/contact?subject=Volunteer%20Interest">Offer Your Skills</Button>
        </div>
      </Section>

      {/* Contribution Programs */}
      <Section variant="gradient" id="programs">
        <SectionHeader
          title="Programs"
          subtitle="Ways to contribute"
        />

        <div className={styles.programsGrid}>
          {contributionPrograms.map((program) => (
            <div key={program.title} className={styles.programCard}>
              <h3>{program.title}</h3>
              <p className={styles.programDescription}>{program.description}</p>
              <div className={styles.programDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Time Commitment</span>
                  <span className={styles.detailValue}>{program.commitment}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Token Earning</span>
                  <span className={styles.detailValue}>{program.tokens}</span>
                </div>
              </div>
              <Button href="/contact?subject=Contribution%20Program" variant="ghost" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Unified Token Section */}
      <Section id="unified-token">
        <div className={styles.tokenContent}>
          <div className={styles.tokenVisual}>
            <div className={styles.tokenCircle}>
              <span>UT</span>
              <p>Unified Token</p>
            </div>
          </div>
          <div className={styles.tokenText}>
            <h2>Unified Token</h2>
            <p>
              Community currency. Your contributions earn real value.
            </p>
            <h3>Use Tokens For</h3>
            <ul>
              {tokenBenefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Trust Units Section */}
      <Section variant="light" id="trust-units">
        <div className={styles.trustContent}>
          <div className={styles.trustText}>
            <h2>Trust Units</h2>
            <p>Long-term equity for significant contributions.</p>
            <h3>Earns Trust Units</h3>
            <ul>
              <li>Infrastructure development</li>
              <li>Major project leadership</li>
              <li>Ecological improvements</li>
              <li>Long-term stewardship</li>
            </ul>
          </div>
          <div className={styles.trustVisual}>
            <div className={styles.trustCircle}>
              <span>TU</span>
              <p>Trust Unit</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Getting Started */}
      <Section id="getting-started">
        <SectionHeader
          title="Get Started"
          subtitle="Four steps"
        />

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <h4>Reach Out</h4>
            <p>Share your skills and interests.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <h4>Find Fit</h4>
            <p>Match your offerings with needs.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <h4>Contribute</h4>
            <p>Start earning Unified Tokens.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <h4>Grow</h4>
            <p>Deeper involvement opens up.</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready?"
        subtitle="Share your gifts."
        primaryText="Offer Skills"
        primaryHref="/contact?subject=Volunteer%20Interest"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
