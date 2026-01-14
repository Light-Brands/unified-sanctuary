import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Card, Accordion, AccordionItem } from '@/components/ui';
import { CTA } from '@/components/sections';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Vision',
  description: 'Discover the four interconnected platforms of Unified Sanctuaries: Permaculture Farm, Retreat Center, Event Venue, and Community Living.',
};

const platforms = [
  {
    id: 'farm',
    name: 'Permaculture Farm & Education Center',
    description: 'Regenerative agriculture, food sovereignty, and hands-on learning',
    features: [
      'Regenerative agriculture using permaculture principles',
      'Orchards, vegetable gardens, herb cultivation, mushroom growing',
      'Farm stand and CSA program for local food access',
      'Educational workshops and agritourism experiences',
      'Compost operation transforming waste to fertility',
      'Portion of harvest donated to local food-insecure families',
    ],
  },
  {
    id: 'retreat',
    name: 'Retreat & Healing Arts Center',
    description: 'Immersive wellness experiences and transformative healing',
    features: [
      'Multi-day immersive wellness retreats',
      'Healing arts: somatic therapy, bodywork, art therapy',
      'Bathhouse and spa facilities',
      'Campground for overnight guests',
      'Dance space and creative studios',
      'Scholarship fund for accessibility',
    ],
  },
  {
    id: 'venue',
    name: 'Event Venue',
    description: 'Gatherings, celebrations, and community connection',
    features: [
      'Indoor/outdoor event spaces for rent',
      'AV and event production services',
      'Festivals, concerts, markets, weddings',
      'Affordable rates for local entrepreneurs and artists',
      'Innovation hub for regenerative practices',
      'Community gathering space',
    ],
  },
  {
    id: 'community',
    name: 'Community Living Space',
    description: '20+ homes woven together in mutual support',
    features: [
      '20+ home neighborhood with diverse housing options',
      'Shared amenities: kitchen, bathrooms, laundry',
      'Tiny homes and van life support',
      'Visitor accommodations',
      'Pathways to residency through contribution',
      'Long-term stewardship model',
    ],
  },
];

const phases = [
  {
    number: 0,
    name: 'Land Acquisition',
    status: 'Current',
    description: 'Actively searching for 50-150 acres in Southern Vermont with water access, existing structures, and agricultural potential. Building our core team of 10+ stewards while establishing the legal trust structure to hold land outside of speculation.',
  },
  {
    number: 1,
    name: 'Foundation',
    status: 'Next',
    description: 'First dwelling construction using natural building workshops. Installing core infrastructure: water systems, power, and access roads. Establishing the first 3-5 resident households and beginning soil restoration and initial garden beds.',
  },
  {
    number: 2,
    name: 'Growth',
    status: 'Future',
    description: 'Expanding farm operations with orchards, market gardens, and herb cultivation. Opening a small cafe and farm stand. Launching the first educational workshops. Constructing 5-10 additional homes through learn-by-doing festivals filmed for online learners.',
  },
  {
    number: 3,
    name: 'Flourishing',
    status: 'Future',
    description: 'Building the retreat center with wellness spaces and bathhouse/spa. Constructing the event venue with professional AV capabilities. Reaching 15-20 resident households. Establishing all four platforms as self-sustaining operations.',
  },
  {
    number: 4,
    name: 'Maturity',
    status: 'Future',
    description: 'Operating as a bioregional hub supporting other eco-villages and regenerative projects. Hosting apprenticeships and extended residencies. Expanding the open-source blueprint network. Serving as a model that has been successfully replicated.',
  },
];

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Our Vision</p>
          <h1>Four Platforms, One Shared Vision</h1>
          <p className={styles.lead}>
            A regenerative farm, retreat center, event venue, and community living space—
            each supporting the others through shared stewardship of land held in trust.
          </p>
        </div>
      </Section>

      {/* Platforms */}
      <Section id="platforms">
        <SectionHeader
          title="The Four Platforms"
          subtitle="Each contributes something essential to the whole"
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
          title="Phases of Development"
          subtitle="Growing organically, one season at a time"
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
          title="An Open-Source Blueprint"
          subtitle="We're not just building a community—we're creating a replicable model."
        />
        <Accordion variant="card" allowMultiple>
          <AccordionItem title="Documentation" defaultOpen>
            <p>Every process, system, and lesson learned will be documented and freely available.</p>
          </AccordionItem>
          <AccordionItem title="Templates">
            <p>Governance structures, legal frameworks, and operational templates for other communities.</p>
          </AccordionItem>
          <AccordionItem title="Network">
            <p>Connecting with other regenerative communities to share resources and knowledge.</p>
          </AccordionItem>
        </Accordion>
      </Section>

      <CTA
        title="Help Us Grow This Vision"
        subtitle="Every contribution helps us move closer to finding and securing land."
        primaryText="Support Us"
        primaryHref="/support"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
