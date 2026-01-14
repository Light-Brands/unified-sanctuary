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
  description: 'Learn about Unified Sanctuaries - our story, our team, and the values that guide us in creating a regenerative community in Vermont.',
};

const team = [
  { name: 'Sydney', role: 'Community Builder & Visionary', bio: 'With roots in event production and governance design, Sydney weaves connections across communities. A decade of work in participatory organizing guides the vision for Unified Sanctuaries.' },
  { name: 'Lynney', role: 'Farmer & Herbalist', bio: 'A lifelong grower with expertise in regenerative agriculture, herbal medicine, and farm-to-table culinary arts. Lynney brings hands-on experience running community-supported agriculture programs.' },
  { name: 'Nina', role: 'Storyteller & Medicine Maker', bio: 'Homesteader, herbalist, and keeper of stories. Nina crafts the narratives that connect our work to the wider world while tending medicines from the land.' },
  { name: 'Josie', role: 'Earth Lawyer & Playwright', bio: 'An environmental attorney who also crafts chocolate and writes plays. Josie navigates legal frameworks to protect land while nurturing creative expression.' },
  { name: 'Tiff', role: 'Somatic Therapist & Facilitator', bio: 'Trained in somatic therapy, art therapy, and retreat facilitation. Tiff holds space for deep healing work and embodied transformation practices.' },
  { name: 'Eslerh', role: 'Filmmaker & Multimedia Artist', bio: 'Visual storyteller working across film, ritual theater, and multimedia installation. Eslerh documents our journey and creates immersive artistic experiences.' },
  { name: 'Scotty', role: 'Soil Scientist & Natural Builder', bio: 'Expert in soil health, composting systems, and natural building techniques. Scotty ensures our foundation—both literal and ecological—is strong.' },
  { name: 'Jess', role: 'Civil Engineer & Healing Arts', bio: 'Licensed civil engineer with a passion for bathhouse design and healing spaces. Jess bridges technical infrastructure with holistic wellness.' },
  { name: 'Michael', role: 'Financial Steward & Operations', bio: 'Background in accounting and festival production operations. Michael ensures our resources are managed with integrity and our systems run smoothly.' },
  { name: 'Pato', role: 'Permaculturist & Builder', bio: 'Decades of experience in permaculture design, natural building, and nonprofit management. Pato designs systems that mimic nature&apos;s wisdom and abundance.' },
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
    description: 'Decisions are made by those most affected. Our Anchor Circle model ensures diverse voices shape our direction.',
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
    description: 'Find your place in this community',
    color: 'var(--color-sage-mist)',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Our Story</p>
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
          subtitle="The people bringing this vision to life"
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
          subtitle="The principles that guide everything we do"
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
