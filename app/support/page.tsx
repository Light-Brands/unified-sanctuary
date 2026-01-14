import type { Metadata } from 'next';
import { Section, SectionHeader, Button, Accordion, AccordionItem } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check, Heart } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Donate or invest. Help us secure land in Vermont.',
};

const donationTiers = [
  {
    amount: '$25',
    name: 'Seedling',
    description: 'Plant a seed',
    rewards: ['Thank you email', 'Name on supporters page', 'Quarterly updates'],
  },
  {
    amount: '$100',
    name: 'Sapling',
    description: 'Grow roots',
    rewards: ['Seedling rewards', 'Virtual update calls', 'Event priority', '50 UT'],
  },
  {
    amount: '$500',
    name: 'Grove',
    description: 'Founding supporter',
    rewards: ['Sapling rewards', 'Free retreat day', 'On-site recognition'],
  },
  {
    amount: '$1,000+',
    name: 'Forest',
    description: 'Foundational support',
    rewards: ['Grove rewards', 'Annual dinner', 'Legacy plaque', 'Lifetime events'],
  },
];

const investmentFeatures = [
  'Non-speculative land',
  'Equity through contribution',
  'Transparent reporting',
  'Governance voice',
  'Long-term focus',
  'Exit at book value',
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Support</p>
          <h1>Help Us Find Land</h1>
          <p className={styles.lead}>
            Secure land in Vermont and build a replicable model.
          </p>
        </div>
      </Section>

      {/* Donate Section */}
      <Section id="donate">
        <SectionHeader
          title="Donate"
          subtitle="Every contribution helps"
        />

        <Accordion variant="card" allowMultiple>
          {donationTiers.map((tier, i) => (
            <AccordionItem
              key={tier.name}
              title={`${tier.name} — ${tier.amount}`}
              subtitle={tier.description}
              defaultOpen={i === 0}
            >
              <ul className={styles.rewards}>
                {tier.rewards.map((reward, j) => (
                  <li key={j}>
                    <Check size={14} />
                    {reward}
                  </li>
                ))}
              </ul>
              <div className={styles.tierAction}>
                <Button href={`/contact?subject=Donation%20-%20${tier.name}%20(${tier.amount})`} size="sm">
                  Donate {tier.amount}
                </Button>
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        <div className={styles.donateInfo}>
          <div className={styles.fiscalSponsor}>
            <Heart size={24} />
            <div>
              <h4>Tax-Deductible</h4>
              <p>Fiscally sponsored. Receipt provided.</p>
            </div>
          </div>

          <div className={styles.recurringGift}>
            <h4>Monthly Giving</h4>
            <p>Recurring support helps us plan.</p>
            <Button href="/contact" variant="secondary" size="sm">
              Set Up Monthly Gift
            </Button>
          </div>
        </div>
      </Section>

      {/* Invest Section */}
      <Section variant="gradient" id="invest">
        <div className={styles.investContent}>
          <div className={styles.investText}>
            <h2>Impact Investment</h2>
            <p className={styles.investLead}>
              Contribution units—land removed from speculation, shared value.
            </p>

            <h3>Features</h3>
            <ul className={styles.investFeatures}>
              {investmentFeatures.map((feature, i) => (
                <li key={i}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button href="/contact">Inquire</Button>
          </div>

          <div className={styles.investVisual}>
            <div className={styles.vesselStack}>
              <div className={styles.stackVessel}></div>
              <div className={styles.stackVessel}></div>
              <div className={styles.stackVessel}></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Where Your Money Goes */}
      <Section id="transparency">
        <SectionHeader
          title="Where It Goes"
          subtitle="Transparent allocation"
        />

        <Accordion variant="card" allowMultiple>
          <AccordionItem title="Land" badge="40%" defaultOpen>
            <p>Down payment for 50-150 acres.</p>
          </AccordionItem>
          <AccordionItem title="Infrastructure" badge="25%">
            <p>Water, power, roads, first dwellings.</p>
          </AccordionItem>
          <AccordionItem title="Operations" badge="20%">
            <p>Legal, admin, staffing.</p>
          </AccordionItem>
          <AccordionItem title="Reserve" badge="15%">
            <p>Emergency fund.</p>
          </AccordionItem>
        </Accordion>
      </Section>

      <CTA
        title="Questions?"
        subtitle="Happy to discuss your support."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Our Vision"
        secondaryHref="/vision"
      />
    </>
  );
}
