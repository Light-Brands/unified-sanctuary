import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Button, Card, Accordion, AccordionItem } from '@/components/ui';
import { CTA } from '@/components/sections';
import {
  Seedling,
  Globe,
  Scale,
  Hands,
  BookOpen,
  TreePine,
  ArrowRight,
} from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Our story, team, and values. Building a regenerative community in Vermont.',
};

const team = [
  { name: 'Sydney', role: 'Community Builder', bio: 'Event production and governance design. A decade of participatory organizing.' },
  { name: 'Lynney', role: 'Farmer & Herbalist', bio: 'Regenerative agriculture, herbal medicine, and CSA experience.' },
  { name: 'Nina', role: 'Storyteller', bio: 'Homesteader, herbalist, and keeper of stories.' },
  { name: 'Josie', role: 'Earth Lawyer', bio: 'Environmental attorney navigating legal frameworks to protect land.' },
  { name: 'Tiff', role: 'Somatic Therapist', bio: 'Somatic therapy, art therapy, and retreat facilitation.' },
  { name: 'Eslerh', role: 'Filmmaker', bio: 'Visual storyteller across film, theater, and multimedia.' },
  { name: 'Scotty', role: 'Soil Scientist', bio: 'Soil health, composting, and natural building.' },
  { name: 'Jess', role: 'Civil Engineer', bio: 'Infrastructure design with focus on bathhouse and healing spaces.' },
  { name: 'Michael', role: 'Financial Steward', bio: 'Accounting and operations management.' },
  { name: 'Pato', role: 'Permaculturist', bio: 'Permaculture design and natural building.' },
];

const values = [
  {
    title: 'Regeneration',
    description: 'Give back more than we take.',
    icon: Seedling,
  },
  {
    title: 'Land in Trust',
    description: 'Not a commodity. Protected from speculation forever.',
    icon: Globe,
  },
  {
    title: 'Equity',
    description: 'Earn your place through what you give, not just what you pay.',
    icon: Scale,
  },
  {
    title: 'Participation',
    description: 'Decisions made by those affected.',
    icon: Hands,
  },
  {
    title: 'Open Source',
    description: 'What we learn, we share.',
    icon: BookOpen,
  },
  {
    title: 'Indigenous Wisdom',
    description: 'Honor the original stewards.',
    icon: TreePine,
  },
];

const exploreLinks = [
  {
    href: '/vision',
    title: 'Vision',
    description: 'Four platforms, five phases',
    color: 'var(--color-river-mist)',
  },
  {
    href: '/governance',
    title: 'Governance',
    description: 'How we make decisions',
    color: 'var(--color-terracotta)',
  },
  {
    href: '/get-involved',
    title: 'Get Involved',
    description: 'Find your place',
    color: 'var(--color-sage-mist)',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>About</p>
          <h1>Our Story</h1>
          <p className={styles.lead}>
            People coming together with shared purpose and respect for the land.
          </p>
        </div>
      </Section>

      {/* Origin Story */}
      <Section>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <h2>How We Began</h2>
            <p>
              We traveled the world learning from regenerative communities and indigenous land stewards—permaculture farms, intentional communities, and healing centers across continents.
            </p>
            <p>
              We came back with a vision: weave everything we&apos;d learned into a living blueprint. Southern Vermont called to us.
            </p>
            <p>
              Now we&apos;re searching for land. Not building a place—growing one.
            </p>
          </div>
          <div className={styles.storyVisual}>
            <div className={styles.vesselShape}>
              <div className={styles.vesselGlow}></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section variant="gradient">
        <SectionHeader
          title="Our Team"
          subtitle="Ten people bringing this to life"
        />
        <Accordion variant="card" allowMultiple>
          {team.map((member) => (
            <AccordionItem
              key={member.name}
              title={member.name}
              subtitle={member.role}
              icon={<span className={styles.avatarSmall}>{member.name[0]}</span>}
            >
              <p>{member.bio}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeader
          title="Our Values"
          subtitle="What guides us"
        />
        <Accordion variant="card" allowMultiple>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <AccordionItem
                key={value.title}
                title={value.title}
                icon={<IconComponent size={20} />}
                defaultOpen={index === 0}
              >
                <p>{value.description}</p>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Section>

      {/* Links to Sub-pages */}
      <Section variant="light">
        <div className={styles.exploreLinks}>
          <h2>Explore More</h2>
          <div className={styles.linkCards}>
            {exploreLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.linkCard}>
                <span className={styles.linkCardLine} style={{ background: link.color }}></span>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <span className={styles.linkCardArrow}>
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTA
        title="Join Us"
        subtitle="Looking for land and the people to make it real."
        primaryText="Get Involved"
        primaryHref="/get-involved"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
