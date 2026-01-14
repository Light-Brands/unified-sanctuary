import type { Metadata } from 'next';
import { Section, SectionHeader, Accordion, AccordionItem } from '@/components/ui';
import { CTA } from '@/components/sections';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Governance',
  description: 'How we make decisions. Participatory governance and community agreements.',
};

const principles = [
  {
    title: 'Two Realms',
    description: 'Residential Realm governs living and culture. Commons Realm governs the platforms and economics.',
  },
  {
    title: 'Platform Autonomy',
    description: 'Each platform sets its own schedules and budgets, accountable to shared values.',
  },
  {
    title: 'Consent-Based',
    description: 'Decisions require no sustained objections. All voices heard.',
  },
  {
    title: 'Transparency',
    description: 'Open meetings, financials, and documentation. Trust through visibility.',
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
    description: 'Express needs without blame. Listen with empathy.',
  },
  {
    title: 'Conflict Resolution',
    description: 'Direct dialogue, then mediation, then circle review. Focus on repair.',
  },
  {
    title: 'Contribution',
    description: '10 hours weekly. Labor, skills, or participation—all honored equally.',
  },
  {
    title: 'Environmental',
    description: 'Composting, ecological products, quiet zones, land stewardship rotations.',
  },
  {
    title: 'Financial',
    description: 'Open books. Monthly summaries. Major purchases need consent.',
  },
  {
    title: 'Guests',
    description: '48-hour notice. Two-week max stays. Hosts accompany guests.',
  },
];

export default function GovernancePage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Governance</p>
          <h1>How We Decide</h1>
          <p className={styles.lead}>
            Decisions by those affected. Circles of stewards, not singular leaders.
          </p>
        </div>
      </Section>

      {/* How We Operate */}
      <Section id="how-we-operate">
        <SectionHeader
          title="How We Operate"
          subtitle="Guiding principles"
        />

        <Accordion variant="card" allowMultiple>
          {principles.map((principle, i) => (
            <AccordionItem key={i} title={principle.title} defaultOpen={i === 0}>
              <p>{principle.description}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Anchor Circle */}
      <Section variant="gradient" id="anchor-circle">
        <SectionHeader
          title="Anchor Circle"
          subtitle="Elected body for community-wide decisions"
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
            <p>5-7 members, 2-year staggered terms, max two consecutive terms.</p>

            <h3>Responsibilities</h3>
            <ul className={styles.rolesList}>
              {circleRoles.map((role, i) => (
                <li key={i}>
                  <strong>{role.title}:</strong> {role.description}
                </li>
              ))}
            </ul>

            <h3>Accountability</h3>
            <p>Monthly meetings. Quarterly reviews. Annual elections.</p>
          </div>
        </div>
      </Section>

      {/* Community Agreements */}
      <Section id="agreements">
        <SectionHeader
          title="Agreements"
          subtitle="Shared commitments"
        />

        <Accordion variant="card" allowMultiple>
          {agreements.map((agreement, i) => (
            <AccordionItem key={i} title={agreement.title} defaultOpen={i === 0}>
              <p>{agreement.description}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <CTA
        title="Evolving Model"
        subtitle="Always learning and adapting."
        primaryText="About Us"
        primaryHref="/about"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
