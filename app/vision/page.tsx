import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Card, Accordion, AccordionItem } from '@/components/ui';
import { CTA } from '@/components/sections';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Vision',
  description: 'Four platforms: Farm, Retreat, Venue, Community. One piece of land in Vermont.',
};

const platforms = [
  {
    id: 'farm',
    name: 'Farm',
    description: 'Regenerative agriculture and education',
    features: [
      'Permaculture gardens and orchards',
      'CSA and farm stand',
      'Workshops and agritourism',
      'Harvest donations to local families',
    ],
  },
  {
    id: 'retreat',
    name: 'Retreat Center',
    description: 'Wellness and healing',
    features: [
      'Multi-day wellness retreats',
      'Healing arts and bodywork',
      'Bathhouse and spa',
      'Campground and guest housing',
    ],
  },
  {
    id: 'venue',
    name: 'Event Venue',
    description: 'Gatherings and celebrations',
    features: [
      'Indoor/outdoor event spaces',
      'Festivals, concerts, weddings',
      'AV and production support',
      'Affordable rates for locals',
    ],
  },
  {
    id: 'community',
    name: 'Community Housing',
    description: '20+ homes together',
    features: [
      'Diverse housing options',
      'Shared amenities',
      'Residency pathways',
      'Long-term stewardship',
    ],
  },
];

const phases = [
  {
    number: 0,
    name: 'Land Acquisition',
    status: 'Current',
    description: 'Searching for 50-150 acres in Southern Vermont. Building our team and establishing the land trust.',
  },
  {
    number: 1,
    name: 'Foundation',
    status: 'Next',
    description: 'First dwellings, core infrastructure, 3-5 households, initial gardens.',
  },
  {
    number: 2,
    name: 'Growth',
    status: 'Future',
    description: 'Expanded farm, cafe, workshops, 5-10 more homes.',
  },
  {
    number: 3,
    name: 'Flourishing',
    status: 'Future',
    description: 'Retreat center, venue, 15-20 households, self-sustaining platforms.',
  },
  {
    number: 4,
    name: 'Maturity',
    status: 'Future',
    description: 'Bioregional hub, apprenticeships, open-source network, replicable model.',
  },
];

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Vision</p>
          <h1>Four Platforms, One Vision</h1>
          <p className={styles.lead}>
            Farm, retreat, venue, and community—sharing one piece of land held in trust.
          </p>
        </div>
      </Section>

      {/* Platforms */}
      <Section id="platforms">
        <SectionHeader
          title="The Four Platforms"
          subtitle="Each supports the whole"
        />

        <Accordion variant="card" allowMultiple>
          {platforms.map((platform, i) => (
            <AccordionItem
              key={platform.id}
              title={platform.name}
              subtitle={platform.description}
              defaultOpen={i === 0}
            >
              <ul className={styles.features}>
                {platform.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Phases */}
      <Section variant="gradient" id="phases">
        <SectionHeader
          title="Development Phases"
          subtitle="Growing one season at a time"
        />

        <Accordion variant="card" allowMultiple>
          {phases.map((phase) => (
            <AccordionItem
              key={phase.number}
              title={`Phase ${phase.number}: ${phase.name}`}
              badge={phase.status}
              defaultOpen={phase.status === 'Current'}
            >
              <p>{phase.description}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Open Source */}
      <Section id="open-source">
        <SectionHeader
          title="Open-Source Blueprint"
          subtitle="Creating a replicable model"
        />
        <Accordion variant="card" allowMultiple>
          <AccordionItem title="Documentation" defaultOpen>
            <p>Every process and lesson documented freely.</p>
          </AccordionItem>
          <AccordionItem title="Templates">
            <p>Governance, legal, and operational templates for other communities.</p>
          </AccordionItem>
          <AccordionItem title="Network">
            <p>Connecting with regenerative communities to share resources.</p>
          </AccordionItem>
        </Accordion>
      </Section>

      <CTA
        title="Help Us Grow"
        subtitle="Every contribution moves us closer to land."
        primaryText="Support Us"
        primaryHref="/support"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
