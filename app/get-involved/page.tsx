import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Button, Card, Accordion, AccordionItem } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Membership, residency, volunteering, or partnership. Find your place.',
};

const membershipTiers = [
  {
    name: 'Supporter',
    price: '$10/month',
    description: 'Stay connected and support land acquisition',
    benefits: [
      'Newsletter and updates',
      'Community gatherings',
      'Voting on surveys',
      'Earn Unified Tokens',
    ],
  },
  {
    name: 'Member',
    price: '$25/month',
    description: 'Priority access to programs',
    benefits: [
      'Everything in Supporter',
      'Priority registration',
      '15% discount on programs',
      'Working group access',
    ],
    featured: true,
  },
  {
    name: 'Steward',
    price: '$75/month',
    description: 'Governance voice and residency pathway',
    benefits: [
      'Everything in Member',
      'Governance participation',
      'Residency priority',
      'Core team mentorship',
    ],
  },
];

const pathways = [
  {
    title: 'Residency',
    description: 'Live on the land. Earned through contribution. Start as Steward.',
    link: '/contact?subject=Residency%20Interest',
  },
  {
    title: 'Work Exchange',
    description: 'Trade skills for room and board. Express interest now.',
    link: '/contact?subject=Work%20Exchange%20Interest',
  },
  {
    title: 'Volunteer',
    description: 'Give time and skills. Earn Unified Tokens.',
    link: '#volunteer',
  },
  {
    title: 'Partner',
    description: 'Events, programs, or bioregional initiatives.',
    link: '#partner',
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Get Involved</p>
          <h1>Find Your Place</h1>
          <p className={styles.lead}>
            Move to the land or stay connected from afar. There&apos;s a place for you.
          </p>
        </div>
      </Section>

      {/* Memberships */}
      <Section id="memberships">
        <SectionHeader
          title="Membership"
          subtitle="Support and access benefits"
        />

        <Accordion variant="card" allowMultiple>
          {membershipTiers.map((tier, i) => (
            <AccordionItem
              key={tier.name}
              title={`${tier.name} — ${tier.price}`}
              subtitle={tier.description}
              badge={tier.featured ? 'Most Popular' : undefined}
              defaultOpen={tier.featured || i === 0}
            >
              <ul className={styles.benefits}>
                {tier.benefits.map((benefit, j) => (
                  <li key={j}>
                    <Check size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className={styles.tierAction}>
                <Button href="/contact" variant={tier.featured ? 'primary' : 'secondary'} size="sm">
                  Join as {tier.name}
                </Button>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Pathways */}
      <Section variant="gradient" id="pathways">
        <SectionHeader
          title="Pathways"
          subtitle="Ways to participate"
        />

        <Accordion variant="card" allowMultiple>
          {pathways.map((pathway, i) => (
            <AccordionItem key={pathway.title} title={pathway.title} defaultOpen={i === 0}>
              <p>{pathway.description}</p>
              <div className={styles.tierAction}>
                <Button href={pathway.link} variant="ghost" size="sm">
                  Learn more
                </Button>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Volunteer Section */}
      <Section id="volunteer">
        <div className={styles.volunteerContent}>
          <div className={styles.volunteerText}>
            <h2>Volunteer</h2>
            <p>
              Every pair of hands helps. Earn Unified Tokens for your contributions.
            </p>
            <h3>Current Needs</h3>
            <ul>
              <li>Land search and research</li>
              <li>Website and design</li>
              <li>Content creation</li>
              <li>Legal and financial advising</li>
              <li>Event planning</li>
              <li>Permaculture design</li>
            </ul>
            <Button href="/contact">Offer Your Skills</Button>
          </div>
          <div className={styles.volunteerVisual}>
            <div className={styles.tokenCircle}>
              <span>UT</span>
              <p>Unified Token</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Partner */}
      <Section variant="light" id="partner">
        <SectionHeader
          title="Partner"
          subtitle="Collaborate with us"
        />

        <Accordion variant="card" allowMultiple>
          <AccordionItem title="Event Hosting" defaultOpen>
            <p>Retreats, workshops, festivals. Flexible spaces, AV support, accommodations.</p>
          </AccordionItem>
          <AccordionItem title="Educational Programs">
            <p>Co-develop curriculum. We provide space and audience.</p>
          </AccordionItem>
          <AccordionItem title="Bioregional">
            <p>Connect with Vermont regenerative network. Mutual support.</p>
          </AccordionItem>
        </Accordion>
      </Section>

      <CTA
        title="Ready?"
        subtitle="Let us know how you'd like to be involved."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
