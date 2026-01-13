import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
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
  description: 'Learn about Unified Sanctuaries - our story, our team, and the values that guide us in creating a regenerative community in Vermont.',
};

const team = [
  { name: 'Sydney', role: 'Community Builder & Visionary', bio: 'Weaving connections and holding the vision for what Unified Sanctuaries can become.' },
  { name: 'Lynney', role: 'Farmer & Herbalist', bio: 'Bringing deep knowledge of regenerative agriculture and medicinal plant cultivation.' },
  { name: 'Nina', role: 'Storyteller & Communications', bio: 'Crafting the narratives that share our mission with the world.' },
  { name: 'Josie', role: 'Earth Lawyer', bio: 'Navigating legal frameworks to protect land and community interests.' },
  { name: 'Tiff', role: 'Somatic Therapist', bio: 'Holding space for healing and embodied transformation.' },
  { name: 'Eslerh', role: 'Filmmaker & Visual Artist', bio: 'Documenting our journey and creating visual expressions of our work.' },
  { name: 'Scotty', role: 'Soil Scientist', bio: 'Understanding the ground beneath us and helping it thrive.' },
  { name: 'Jess', role: 'Civil Engineer', bio: 'Designing infrastructure that works with natural systems.' },
  { name: 'Michael', role: 'Financial Steward', bio: 'Managing resources with integrity and transparency.' },
  { name: 'Pato', role: 'Permaculturist', bio: 'Designing systems that mimic nature&apos;s wisdom and abundance.' },
];

const values = [
  {
    title: 'Regeneration Over Extraction',
    description: 'We give back more than we take, building soil, community, and possibility with every action.',
    icon: Seedling,
  },
  {
    title: 'Non-Speculative Land Stewardship',
    description: 'Land is not a commodity. We remove it from the speculative market forever, holding it in trust for future generations.',
    icon: Globe,
  },
  {
    title: 'Equity Through Contribution',
    description: 'Everyone earns their place through what they give, not just what they can pay. Labor, skills, and care all build equity.',
    icon: Scale,
  },
  {
    title: 'Participatory Governance',
    description: 'Decisions flow from those most affected. Our Anchor Circle model ensures diverse voices shape our direction.',
    icon: Hands,
  },
  {
    title: 'Open-Source Sharing',
    description: 'What we learn, we share. Our blueprint is designed to be replicated, adapted, and improved by communities worldwide.',
    icon: BookOpen,
  },
  {
    title: 'Indigenous Wisdom',
    description: 'We honor the original stewards of this land and center their knowledge in how we relate to place.',
    icon: TreePine,
  },
];

const exploreLinks = [
  {
    href: '/vision',
    title: 'Our Vision',
    description: 'Discover the four platforms and our phases of development',
    color: 'var(--color-river-mist)',
  },
  {
    href: '/governance',
    title: 'How We Govern',
    description: 'Learn about our participatory decision-making model',
    color: 'var(--color-terracotta)',
  },
  {
    href: '/get-involved',
    title: 'Get Involved',
    description: 'Find your place in the network',
    color: 'var(--color-sage-mist)',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>
            <span className={styles.taglineIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </span>
            Our Story
          </p>
          <h1>Where Land and People<br/>Heal Together</h1>
          <p className={styles.lead}>
            Unified Sanctuaries emerged from a simple truth: when people come together
            with shared purpose and deep respect for the land, transformation becomes possible.
          </p>
        </div>
      </Section>

      {/* Origin Story */}
      <Section>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <h2>How We Began</h2>
            <p>
              Our journey started with Permatours - traveling the world to learn from regenerative
              communities and indigenous land stewards. We gathered wisdom from dozens of intentional
              communities, permaculture farms, and healing centers across continents.
            </p>
            <p>
              We returned home with a vision: to create something that wove together everything
              we&apos;d learned - a living blueprint that could serve as a model for others.
              Southern Vermont called to us with its rich soil, flowing waters, and community
              of like-minded souls.
            </p>
            <p>
              Now, we&apos;re in the land search phase - seeking the right piece of earth to begin
              this experiment in regenerative living. We&apos;re not building a place. We&apos;re growing one.
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
          title="Our Core Team"
          subtitle="The humans weaving this vision into reality"
        />
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <Card key={member.name}>
              <div className={styles.teamMember} style={{ animationDelay: `${index * 0.05}s` }}>
                <div className={styles.avatar}>{member.name[0]}</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do"
        />
        <div className={styles.valuesGrid}>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className={styles.valueCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.valueIcon}>
                  <IconComponent size={24} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
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
        title="Join Our Journey"
        subtitle="We're looking for the land and the people to make this vision real."
        primaryText="Get Involved"
        primaryHref="/get-involved"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
