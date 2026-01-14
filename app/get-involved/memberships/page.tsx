import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Memberships',
  description: 'Community and platform memberships. Support the mission, access benefits.',
};

const communityTiers = [
  {
    name: 'Supporter',
    price: '$10/month',
    description: 'Stay connected',
    benefits: [
      'Newsletter and updates',
      'Community gatherings',
      'Voting rights',
      'Earn Unified Tokens',
    ],
  },
  {
    name: 'Member',
    price: '$25/month',
    description: 'Priority access',
    benefits: [
      'Everything in Supporter',
      'Priority registration',
      '15% discount on programs',
      'Working groups',
    ],
    featured: true,
  },
  {
    name: 'Steward',
    price: '$75/month',
    description: 'Governance and residency',
    benefits: [
      'Everything in Member',
      'Governance participation',
      'Residency priority',
      'Core team mentorship',
    ],
  },
];

const platformMemberships = [
  {
    name: 'Farm',
    price: '$50/month',
    icon: '🌱',
    description: 'Regenerative agriculture',
    benefits: [
      'Harvest share (goal: 10+ lbs)',
      '15% farm stand discount',
      'Workshop priority',
      'Farm-to-table dinners',
    ],
    details: 'Fresh produce at every harvest.',
  },
  {
    name: 'Retreat',
    price: '$40/month',
    icon: '🧘',
    description: 'Wellness and healing',
    benefits: [
      'Monthly wellness gatherings',
      '15% retreat discount',
      'Early registration',
      'Member-only workshops',
    ],
    details: 'Yoga, meditation, breathwork, ecstatic dance.',
  },
  {
    name: 'Venue',
    price: '$35/month',
    icon: '🎪',
    description: 'Event producers',
    benefits: [
      '15% venue discount',
      'Priority booking',
      'Networking events',
      'Shared equipment',
    ],
    details: 'Connect with fellow organizers.',
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Memberships</p>
          <h1>Support. Access.</h1>
          <p className={styles.lead}>
            Choose a community tier, platform membership, or both.
          </p>
        </div>
      </Section>

      {/* Community Memberships */}
      <Section id="community-memberships">
        <SectionHeader
          title="Community"
          subtitle="Stay connected"
        />

        <div className={styles.membershipGrid}>
          {communityTiers.map((tier) => (
            <div key={tier.name} className={`${styles.membershipCard} ${tier.featured ? styles.featured : ''}`}>
              {tier.featured && <div className={styles.featuredBadge}>Most Popular</div>}
              <h3>{tier.name}</h3>
              <div className={styles.price}>{tier.price}</div>
              <p className={styles.tierDescription}>{tier.description}</p>
              <ul className={styles.benefits}>
                {tier.benefits.map((benefit, i) => (
                  <li key={i}>
                    <Check size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button href="/contact?subject=Membership%20-%20{tier.name}" variant={tier.featured ? 'primary' : 'secondary'}>
                Join as {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Platform-Specific Memberships */}
      <Section variant="gradient" id="platform-memberships">
        <SectionHeader
          title="Platform"
          subtitle="Connect with specific areas"
        />

        <div className={styles.platformGrid}>
          {platformMemberships.map((membership) => (
            <div key={membership.name} className={styles.platformCard}>
              <div className={styles.platformHeader}>
                <span className={styles.platformIcon}>{membership.icon}</span>
                <div>
                  <h3>{membership.name}</h3>
                  <div className={styles.platformPrice}>{membership.price}</div>
                </div>
              </div>
              <p className={styles.platformDescription}>{membership.description}</p>
              <ul className={styles.benefits}>
                {membership.benefits.map((benefit, i) => (
                  <li key={i}>
                    <Check size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className={styles.platformDetails}>{membership.details}</p>
              <Button href={`/contact?subject=${encodeURIComponent(membership.name)}`} variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Unified Token Info */}
      <Section id="unified-token">
        <div className={styles.tokenContent}>
          <div className={styles.tokenText}>
            <h2>Unified Token</h2>
            <p>
              Membership earns tokens—our community currency.
            </p>
            <h3>Use Tokens For</h3>
            <ul>
              <li>Farm stand and retreat store</li>
              <li>Sessions and workshops</li>
              <li>Events and celebrations</li>
              <li>Community services</li>
              <li>Residency pathway credits</li>
            </ul>
          </div>
          <div className={styles.tokenVisual}>
            <div className={styles.tokenCircle}>
              <span>UT</span>
              <p>Unified Token</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <SectionHeader
          title="FAQ"
          subtitle="Common questions"
        />

        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>Multiple memberships?</h4>
            <p>Yes. Combine community and platform tiers.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>When do benefits begin?</h4>
            <p>Community: immediately. Platform: when operational.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Tax-deductible?</h4>
            <p>Partially. Contact us for details.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Want residency?</h4>
            <p>Start as Steward. Participation builds connection.</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Join"
        subtitle="Become part of the community."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
