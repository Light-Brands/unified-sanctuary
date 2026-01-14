import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Governance',
  description: 'Learn about how Unified Sanctuaries makes decisions through participatory governance, the Anchor Circle model, and community agreements.',
};

const principles = [
  {
    title: 'Two Realms of Governance',
    description: 'The Residential Realm governs shared living spaces, membership, and community culture. The Commons/Enterprise Realm governs the four platforms and economic activities. Each realm has its own decision-making processes.',
  },
  {
    title: 'Platform Autonomy',
    description: 'Each platform (Farm, Retreat, Venue, Community Living) operates with significant autonomy—setting its own schedules, budgets, and internal processes. Autonomy is balanced with accountability to shared values and the Anchor Circle.',
  },
  {
    title: 'Consent-Based Decisions',
    description: 'Major decisions require no sustained objections rather than unanimous agreement. Anyone can raise a concern, and the community works to integrate that wisdom. This allows progress while honoring all voices.',
  },
  {
    title: 'Radical Transparency',
    description: 'All governance processes, meeting notes, financials, and decisions are documented and accessible to community members. We believe transparency builds trust and prevents the concentration of informal power.',
  },
];

const circleRoles = [
  { title: 'Stewardship', description: 'Long-term vision and land care' },
  { title: 'Finance', description: 'Resource allocation and transparency' },
  { title: 'Membership', description: 'Community composition and pathways' },
  { title: 'Conflict Resolution', description: 'Mediation and repair' },
  { title: 'External Relations', description: 'Partnerships and public presence' },
];

const agreements = [
  {
    title: 'Nonviolent Communication',
    description: 'We practice NVC as our foundational communication framework. All community members commit to expressing needs without blame and listening with empathy before responding.',
  },
  {
    title: 'Conflict Resolution Protocol',
    description: 'Three-step restorative process: direct dialogue between parties, facilitated conversation with a trained mediator, then circle review with community witnesses if needed. Focus on repair, not punishment.',
  },
  {
    title: 'Contribution Expectations',
    description: 'All residents contribute a minimum of 10 hours weekly through labor, skills, or agreed-upon participation. Contributions are tracked and honored equally whether physical, administrative, or creative.',
  },
  {
    title: 'Environmental Commitments',
    description: 'Shared standards including composting all organic waste, using only approved ecological products, respecting quiet zones and wildlife corridors, and participating in land stewardship rotations.',
  },
  {
    title: 'Financial Transparency',
    description: 'Complete open books policy. Monthly financial summaries shared with all members. Quarterly deep-dive reviews open to full community. Major expenditures require community consent.',
  },
  {
    title: 'Guest & Visitor Guidelines',
    description: 'Visitors welcomed with 48-hour advance notice. Maximum 2-week stays for non-members. Guests respect quiet hours, community spaces, and are accompanied by their host in shared areas.',
  },
];

export default function GovernancePage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>How We Govern</p>
          <h1>Shared Leadership, Clear Accountability</h1>
          <p className={styles.lead}>
            Decisions emerge from those most affected, with clear processes for participation
            and accountability. We&apos;re moving beyond one-person leadership toward circles
            of trusted stewards.
          </p>
        </div>
      </Section>

      {/* How We Operate */}
      <Section id="how-we-operate">
        <SectionHeader
          title="How We Operate"
          subtitle="Principles that guide our collective decision-making"
        />

        <div className={styles.principlesGrid}>
          {principles.map((principle, i) => (
            <div key={i} className={styles.principleCard}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Anchor Circle */}
      <Section variant="gradient" id="anchor-circle">
        <SectionHeader
          title="The Anchor Circle"
          subtitle="A rotating elected body that holds community-wide decisions"
        />

        <div className={styles.circleContainer}>
          <div className={styles.circleVisual}>
            <svg viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
              <circle cx="150" cy="150" r="100" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
              <circle cx="150" cy="150" r="40" fill="rgba(255,255,255,0.1)" />
              <circle cx="150" cy="150" r="35" fill="var(--color-river-deep)" />
              <text x="150" y="155" textAnchor="middle" fill="var(--color-cream)" fontSize="10" fontWeight="500">ANCHOR</text>

              {/* Role nodes */}
              <circle cx="150" cy="30" r="20" fill="white" />
              <circle cx="264" cy="100" r="20" fill="white" />
              <circle cx="230" cy="230" r="20" fill="white" />
              <circle cx="70" cy="230" r="20" fill="white" />
              <circle cx="36" cy="100" r="20" fill="white" />
            </svg>
          </div>

          <div className={styles.circleInfo}>
            <h3>Structure</h3>
            <p>5-7 members elected by the community, serving staggered 2-year terms. No single person serves more than two consecutive terms.</p>

            <h3>Responsibilities</h3>
            <ul className={styles.rolesList}>
              {circleRoles.map((role, i) => (
                <li key={i}>
                  <strong>{role.title}:</strong> {role.description}
                </li>
              ))}
            </ul>

            <h3>Accountability</h3>
            <p>Monthly open meetings. Quarterly community reviews. Annual elections for rotating seats.</p>
          </div>
        </div>
      </Section>

      {/* Community Agreements */}
      <Section id="agreements">
        <SectionHeader
          title="Community Agreements"
          subtitle="The shared commitments that hold us together"
        />

        <div className={styles.agreementsGrid}>
          {agreements.map((agreement, i) => (
            <div key={i} className={styles.agreementCard}>
              <h3>{agreement.title}</h3>
              <p>{agreement.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Governance That Grows"
        subtitle="Our model is designed to evolve. We're always learning and adapting."
        primaryText="Learn More About Us"
        primaryHref="/about"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
