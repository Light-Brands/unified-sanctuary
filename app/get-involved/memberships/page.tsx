import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Memberships',
  description: 'Join Unified Sanctuaries through community or platform-specific memberships. Support the mission while accessing exclusive benefits.',
};

const communityTiers = [
  {
    name: 'Supporter',
    price: '$10/month',
    description: 'Stay connected and support the land acquisition effort while enjoying community access',
    benefits: [
      'Monthly newsletter with behind-the-scenes updates',
      'Invitations to virtual and in-person community gatherings',
      'Voting rights on community surveys and input sessions',
      'Earn Unified Tokens for engagement and referrals',
      'Name listed on our Supporters page',
    ],
  },
  {
    name: 'Member',
    price: '$25/month',
    description: 'Deeper engagement with priority access to programs and platform benefits',
    benefits: [
      'Everything in Supporter tier',
      'Priority registration for retreats and workshops',
      '15% discount on all retreats and educational programs',
      '15% discount at the farm stand when operational',
      'Join working groups shaping community development',
      'Access to member-only online community space',
    ],
    featured: true,
  },
  {
    name: 'Steward',
    price: '$75/month',
    description: 'Full participation with governance voice and pathway to residency',
    benefits: [
      'Everything in Member tier',
      'Participate in governance and Anchor Circle meetings',
      'One free retreat day annually when operational',
      'Priority consideration for future residency',
      'Direct input on community development decisions',
      'Mentorship from core team members',
    ],
  },
];

const platformMemberships = [
  {
    name: 'Farm Membership',
    price: '$50/month',
    icon: '🌱',
    description: 'Connect directly with the land through our regenerative agriculture program',
    benefits: [
      'Share of the harvest when operational (goal: 10+ lbs produce per harvest)',
      '15% discount on all farm stand items and preserved goods',
      'Priority registration for farm workshops and agritourism events',
      'Behind-the-scenes farm updates and seasonal planning insights',
      'Invitations to harvest celebrations and farm-to-table dinners',
    ],
    details: 'Farm members receive fresh, nutrient-dense produce at every harvest. Your share amount depends on successful harvests and member numbers, but our goal is for each member to receive at least 10 lbs of seasonal produce.',
  },
  {
    name: 'Retreat & Healing Arts Membership',
    price: '$40/month',
    icon: '🧘',
    description: 'Access wellness programming and healing arts community',
    benefits: [
      'Free monthly wellness gatherings (yoga, meditation, breathwork, ecstatic dance)',
      '15% discount on retreat bookings and healing arts sessions',
      '15% discount on items sold at the retreat store',
      'Early access to retreat program registration',
      'Quarterly member-only healing arts workshops',
    ],
    details: 'Retreat members enjoy a variety of wellness offerings including yoga, meditation, breathwork, ecstatic dance, contact improv, and other healing arts workshops. Connect with practitioners and fellow seekers in our wellness community.',
  },
  {
    name: 'Event Venue Membership',
    price: '$35/month',
    icon: '🎪',
    description: 'For event producers, organizers, and creative collaborators',
    benefits: [
      '15% discount on venue rentals and event production services',
      'Priority booking for high-demand dates',
      'Monthly networking events with fellow event producers',
      'Access to shared equipment and production resources',
      'Collaborative opportunities with other venue members',
    ],
    details: 'Venue members are part of our event production community. Connect with fellow organizers, access professional A/V and production support, and bring your creative visions to life in our flexible indoor/outdoor spaces.',
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Memberships</p>
          <h1>Support the Vision.<br/>Access the Benefits.</h1>
          <p className={styles.lead}>
            Memberships are your gateway to engaging deeply with Unified Sanctuaries while
            enjoying benefits tailored to your interests. Choose a community tier, a platform
            membership, or both.
          </p>
        </div>
      </Section>

      {/* Community Memberships */}
      <Section id="community-memberships">
        <SectionHeader
          title="Community Memberships"
          subtitle="Support our mission and stay connected with the growing community"
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
          title="Platform Memberships"
          subtitle="Connect with specific areas of the sanctuary based on your interests"
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
            <h2>The Unified Token</h2>
            <p>
              All membership engagement earns you Unified Tokens—our internal community currency
              that rewards participation and builds a regenerative local economy.
            </p>
            <h3>What You Can Do With Tokens</h3>
            <ul>
              <li>Purchase products from our farm stand and retreat store</li>
              <li>Book healing arts sessions and workshops</li>
              <li>Attend community events and celebrations</li>
              <li>Exchange for services from community businesses</li>
              <li>Accumulate toward residency pathway credits</li>
            </ul>
            <p className={styles.tokenNote}>
              Tokens are designed to reduce reliance on government-issued currency, promote circular
              exchanges within the community, and reward meaningful contributions to the project.
            </p>
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
          title="Membership FAQ"
          subtitle="Common questions about joining"
        />

        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>Can I have multiple memberships?</h4>
            <p>
              Yes! Many members combine a community tier with one or more platform memberships
              to maximize their benefits and engagement.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>When do platform benefits begin?</h4>
            <p>
              Community tier benefits begin immediately. Platform-specific benefits like farm
              shares and retreat access will activate once we secure land and launch operations.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Are memberships tax-deductible?</h4>
            <p>
              A portion of membership fees may be tax-deductible. Contact us for details about
              our fiscal sponsorship and tax benefits.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>What if I want to become a resident?</h4>
            <p>
              Steward membership is the recommended pathway to residency consideration. Active
              participation and contribution build your connection with the community.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to Join?"
        subtitle="Become part of the Unified Sanctuaries community today."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="View All Ways to Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
