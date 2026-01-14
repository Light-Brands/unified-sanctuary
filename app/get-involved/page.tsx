import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Button, Card, Accordion, AccordionItem } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Join Unified Sanctuaries through membership, residency, volunteering, or partnership. Find your place in our regenerative community network.',
};

const membershipTiers = [
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

const pathways = [
  {
    title: 'Residency',
    description: 'Live on the land as part of our community. Residencies are earned through contribution and commitment. Start as a Steward member to begin the pathway.',
    link: '/contact?subject=Residency%20Interest',
  },
  {
    title: 'Work Exchange',
    description: 'Trade your skills and labor for room and board during seasonal work periods. Programs will begin once we secure land—express interest now to be first in line.',
    link: '/contact?subject=Work%20Exchange%20Interest',
  },
  {
    title: 'Volunteer',
    description: 'Give your time and skills to specific projects. Earn Unified Tokens for your contributions. We have immediate needs in several areas.',
    link: '#volunteer',
  },
  {
    title: 'Partner',
    description: 'Collaborate with us on events, educational programs, or bioregional initiatives. We welcome aligned organizations and individuals.',
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
          <h1>Find Your Place<br/>in This Community</h1>
          <p className={styles.lead}>
            Whether you&apos;re ready to move onto the land or just want to stay connected,
            there&apos;s a place for you in Unified Sanctuaries.
          </p>
        </div>
      </Section>

      {/* Memberships */}
      <Section id="memberships">
        <SectionHeader
          title="Membership"
          subtitle="Support our mission and access community benefits"
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
          title="Pathways to Participation"
          subtitle="Multiple ways to join and contribute"
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
            <h2>Volunteer & Contribute</h2>
            <p>
              We&apos;re building something together, and every pair of hands helps.
              Volunteers earn Unified Tokens for their contributions—a community currency
              that can be exchanged for goods, services, and experiences within the community.
            </p>
            <h3>Current Needs</h3>
            <ul>
              <li>Land search support and research</li>
              <li>Website development and design</li>
              <li>Content creation and storytelling</li>
              <li>Legal and financial advising</li>
              <li>Event planning and coordination</li>
              <li>Permaculture design consultation</li>
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
          title="Partner With Us"
          subtitle="Collaborate on creating regenerative impact"
        />

        <Accordion variant="card" allowMultiple>
          <AccordionItem title="Event Hosting" defaultOpen>
            <p>Host your retreat, workshop, festival, or gathering at our venue. We offer flexible indoor/outdoor spaces, professional AV support, and on-site accommodations. Affordable rates for aligned organizations.</p>
          </AccordionItem>
          <AccordionItem title="Educational Programs">
            <p>Co-develop curriculum in permaculture, healing arts, natural building, or community governance. We offer space, infrastructure, and a built-in audience of engaged learners.</p>
          </AccordionItem>
          <AccordionItem title="Bioregional Collaboration">
            <p>Connect with the growing network of Southern Vermont regenerative initiatives. We&apos;re building relationships with farms, land trusts, and community organizations for mutual support and resource sharing.</p>
          </AccordionItem>
        </Accordion>
      </Section>

      <CTA
        title="Ready to Connect?"
        subtitle="Reach out and let us know how you'd like to be involved."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
