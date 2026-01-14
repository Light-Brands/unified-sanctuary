import type { Metadata } from 'next';
import { Section, SectionHeader, Button, Accordion, AccordionItem } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check, Heart } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Support Us',
  description: 'Support Unified Sanctuaries through donations and impact investment. Help us secure land and build a regenerative community in Vermont.',
};

const donationTiers = [
  {
    amount: '$25',
    name: 'Seedling',
    description: 'Plant a seed of support and help us grow toward our vision',
    rewards: [
      'Personal thank you email from the team',
      'Name listed on our Supporters page',
      'Quarterly email updates on our progress',
    ],
  },
  {
    amount: '$100',
    name: 'Sapling',
    description: 'Help our roots grow deeper into the Vermont soil',
    rewards: [
      'All Seedling rewards',
      'Invitation to quarterly virtual update calls',
      'Priority invitation to community events',
      'Unified Token welcome gift (50 UT)',
    ],
  },
  {
    amount: '$500',
    name: 'Grove',
    description: 'Make a significant impact and become a founding supporter',
    rewards: [
      'All Sapling rewards',
      'One free retreat day when operational',
      'Founding supporter recognition on-site',
      'Behind-the-scenes land search updates',
    ],
  },
  {
    amount: '$1,000+',
    name: 'Forest',
    description: 'Become foundational support for the community we are building',
    rewards: [
      'All Grove rewards',
      'Annual dinner with founders and core team',
      'Legacy recognition plaque installed on the land',
      'Lifetime free access to community events',
    ],
  },
];

const investmentFeatures = [
  'Non-speculative: land is removed from the market permanently',
  'Contribution-based equity through financial and labor investment',
  'Quarterly transparent financial reporting to all investors',
  'Voice in community governance decisions',
  'Long-term stewardship focus over short-term returns',
  'Open-source documentation of our model for replication',
  'Exit at book value (not market speculation)',
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Support Us</p>
          <h1>Help Us Find Our Land</h1>
          <p className={styles.lead}>
            Your support helps us secure land in Southern Vermont, build the infrastructure
            we need, and create a model that other communities can replicate.
          </p>
        </div>
      </Section>

      {/* Donate Section */}
      <Section id="donate">
        <SectionHeader
          title="Donate"
          subtitle="Every contribution brings us closer to securing land"
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
              <h4>Fiscal Sponsorship</h4>
              <p>
                We are fiscally sponsored, making your donation tax-deductible.
                You&apos;ll receive a tax receipt for all contributions.
              </p>
            </div>
          </div>

          <div className={styles.recurringGift}>
            <h4>Monthly Giving</h4>
            <p>
              Consider becoming a sustaining donor with a monthly gift.
              Recurring support helps us plan for the future with confidence.
            </p>
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
              Beyond donation, you can invest in our vision through contribution units—
              a model that removes land from speculation while creating shared value.
            </p>

            <h3>How It Works</h3>
            <p>
              Our contribution model allows investors to support land acquisition while
              building equity through a combination of financial investment and labor
              contribution. This is not a traditional real estate investment—it&apos;s a
              commitment to regenerative stewardship.
            </p>

            <h3>What We Offer</h3>
            <ul className={styles.investFeatures}>
              {investmentFeatures.map((feature, i) => (
                <li key={i}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button href="/contact">Inquire About Investment</Button>
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
          title="Where Your Support Goes"
          subtitle="Complete transparency in how we use funds"
        />

        <Accordion variant="card" allowMultiple>
          <AccordionItem title="Land Acquisition" badge="40%" defaultOpen>
            <p>Down payment and closing costs for 50-150 acres in Southern Vermont. This is the foundation—without land, nothing else is possible.</p>
          </AccordionItem>
          <AccordionItem title="Infrastructure" badge="25%">
            <p>Essential systems: well/water, solar/power, access roads, and first dwelling construction using natural building techniques.</p>
          </AccordionItem>
          <AccordionItem title="Operations" badge="20%">
            <p>Legal structuring for the trust, administrative costs, community organizing, and initial staffing to coordinate the build-out.</p>
          </AccordionItem>
          <AccordionItem title="Reserve" badge="15%">
            <p>Emergency fund for unexpected costs, weather delays, or opportunities. Responsible stewardship requires a buffer for the unknown.</p>
          </AccordionItem>
        </Accordion>
      </Section>

      <CTA
        title="Questions About Giving?"
        subtitle="We're happy to discuss how your support can make the biggest impact."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Learn About Our Vision"
        secondaryHref="/vision"
      />
    </>
  );
}
