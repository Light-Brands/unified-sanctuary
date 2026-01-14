import type { Metadata } from 'next';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Volunteer & Contribute',
  description: 'Give your time, skills, and talents to help build Unified Sanctuaries. Earn Unified Tokens for your contributions.',
};

const currentNeeds = [
  {
    category: 'Land & Research',
    icon: '🔍',
    opportunities: [
      'Land search support and property research',
      'Vermont zoning and permitting research',
      'Grant writing and funding research',
      'Legal research on land trust structures',
    ],
  },
  {
    category: 'Creative & Digital',
    icon: '🎨',
    opportunities: [
      'Website development and design',
      'Content creation and storytelling',
      'Social media management',
      'Video production and editing',
      'Photography for events and documentation',
    ],
  },
  {
    category: 'Professional Services',
    icon: '📋',
    opportunities: [
      'Legal advising (nonprofit, land trust, contracts)',
      'Financial advising and accounting',
      'Business planning and strategy',
      'Fundraising and donor relations',
    ],
  },
  {
    category: 'Design & Planning',
    icon: '🏗️',
    opportunities: [
      'Permaculture design consultation',
      'Architectural and natural building planning',
      'Infrastructure planning',
      'Event planning and coordination',
    ],
  },
];

const contributionPrograms = [
  {
    title: 'Skill-Based Volunteering',
    description: 'Contribute your professional expertise on a project basis. From a few hours to ongoing commitment, we match your skills with our current needs.',
    commitment: '2-10 hours/month',
    tokens: '10-50 UT/month',
  },
  {
    title: 'Work Exchange Residency',
    description: 'Trade your skills and labor for room and board during seasonal work periods. Live on the land while contributing to daily operations.',
    commitment: '20-25 hours/week',
    tokens: 'Room + Board + 25 UT/week',
  },
  {
    title: 'Building Workshop Leader',
    description: 'Lead hands-on infrastructure workshops teaching natural building, permaculture installation, or other construction skills.',
    commitment: 'Workshop-based',
    tokens: '100+ UT/workshop',
  },
  {
    title: 'Platform Stewardship',
    description: 'Take on significant responsibility for developing and managing one of our core platforms: farm, retreat center, venue, or community living space.',
    commitment: '15-30 hours/week',
    tokens: 'Negotiated + Trust Units',
  },
];

const tokenBenefits = [
  'Purchase farm produce, preserved goods, and artisanal products',
  'Book healing arts sessions, massages, and wellness services',
  'Attend workshops, retreats, and educational programs',
  'Access event tickets and community celebrations',
  'Exchange with other community members for goods and services',
  'Accumulate toward residency pathway consideration',
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Volunteer & Contribute</p>
          <h1>Build Something<br/>Beautiful Together</h1>
          <p className={styles.lead}>
            We&apos;re building something together, and every pair of hands helps. Volunteers earn
            Unified Tokens for their contributions—a community currency that recognizes your
            work and can be exchanged for goods, services, and experiences within the network.
          </p>
        </div>
      </Section>

      {/* Current Needs */}
      <Section id="current-needs">
        <SectionHeader
          title="Current Volunteer Needs"
          subtitle="Where we need help right now"
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
          <p>Have skills we haven&apos;t listed? We&apos;re always open to unexpected gifts.</p>
          <Button href="/contact?subject=Volunteer%20Interest">Offer Your Skills</Button>
        </div>
      </Section>

      {/* Contribution Programs */}
      <Section variant="gradient" id="programs">
        <SectionHeader
          title="Ways to Contribute"
          subtitle="From occasional volunteering to full-time commitment"
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
            <h2>The Unified Token Economy</h2>
            <p>
              The Unified Token is our internal community currency designed to incentivize
              participation and build a regenerative local economy. Unlike traditional volunteer
              work, your contributions here earn tangible value that circulates within our ecosystem.
            </p>
            <h3>What Tokens Can Do</h3>
            <ul>
              {tokenBenefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <h3>How Tokens Work</h3>
            <p className={styles.tokenNote}>
              Contributors earn tokens based on the type and impact of their work. Tokens are
              tracked in our community ledger and can be spent with any participating community
              business or individual. The system reduces reliance on government-issued currency
              and promotes circular exchanges that keep value within the community.
            </p>
          </div>
        </div>
      </Section>

      {/* Trust Units Section */}
      <Section variant="light" id="trust-units">
        <div className={styles.trustContent}>
          <div className={styles.trustText}>
            <h2>Earning Long-Term Equity</h2>
            <p>
              For those who make significant, lasting contributions to Unified Sanctuaries,
              we offer a pathway to earning Trust Units—long-term equity in the project itself.
            </p>
            <h3>What Earns Trust Units</h3>
            <ul>
              <li>Infrastructure development (buildings, systems, land improvements)</li>
              <li>Significant project contributions (major initiatives, leadership)</li>
              <li>Ecological improvements (soil building, water systems, biodiversity)</li>
              <li>Long-term stewardship of platforms or operations</li>
            </ul>
            <h3>What Trust Units Mean</h3>
            <p>
              Trust units represent your stake in the long-term value of Unified Sanctuaries.
              They reflect the value you&apos;ve created and can be liquidated upon exit (in some
              cases over time, based on the property&apos;s value and available resources). This
              ensures that those who invest in the health and growth of the community are
              rewarded with enduring benefits.
            </p>
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
          title="Getting Started"
          subtitle="How to begin your contribution journey"
        />

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <h4>Reach Out</h4>
            <p>Contact us to share your skills, interests, and availability. We&apos;ll schedule a conversation to learn more about you.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <h4>Find Your Fit</h4>
            <p>We&apos;ll match your offerings with current needs and discuss contribution structures that work for your situation.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <h4>Start Contributing</h4>
            <p>Begin your work and start earning Unified Tokens. Connect with fellow contributors and become part of our growing community.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <h4>Grow Your Role</h4>
            <p>As you contribute, opportunities for deeper involvement—including work exchange, stewardship, and residency—may open up.</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to Contribute?"
        subtitle="Share your gifts and help us build a regenerative future."
        primaryText="Offer Your Skills"
        primaryHref="/contact?subject=Volunteer%20Interest"
        secondaryText="View All Ways to Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
