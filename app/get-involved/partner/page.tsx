import type { Metadata } from 'next';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Partner',
  description: 'Events, education, bioregional, and research partnerships.',
};

const partnershipTypes = [
  {
    title: 'Events',
    icon: '🎪',
    description: 'Host retreats, workshops, festivals, weddings',
    offerings: [
      'Indoor/outdoor spaces',
      'A/V and production',
      'Accommodations',
      'Farm-fresh catering',
    ],
    ideal: 'Event producers, retreat leaders, artists.',
  },
  {
    title: 'Education',
    icon: '📚',
    description: 'Co-develop learning experiences',
    offerings: [
      'Curriculum development',
      'Land and facilities',
      'Built-in audience',
      'Revenue sharing',
    ],
    ideal: 'Educators in permaculture, healing arts, building.',
  },
  {
    title: 'Bioregional',
    icon: '🌿',
    description: 'Vermont regenerative network',
    offerings: [
      'Resource sharing',
      'Joint programming',
      'Mutual aid',
      'Grant collaboration',
    ],
    ideal: 'Farms, land trusts, food security projects.',
  },
  {
    title: 'Research',
    icon: '🔬',
    description: 'Living laboratory',
    offerings: [
      'Field research access',
      'Ecosystem studies',
      'Governance research',
      'Data sharing',
    ],
    ideal: 'Academic and independent researchers.',
  },
];

const collaborationBenefits = [
  { title: 'Aligned Values', description: 'Regeneration, equity, wellbeing.' },
  { title: 'Beautiful Setting', description: 'Vermont forests and meadows.' },
  { title: 'Built-In Community', description: 'Engaged network.' },
  { title: 'Flexible', description: 'Agreements that work for you.' },
  { title: 'Long-Term', description: 'Growing relationships.' },
  { title: 'Mutual Support', description: 'We grow together.' },
];

const partnerTestimonials: { quote: string; author: string; role: string }[] = [];

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Partner</p>
          <h1>Create Together</h1>
          <p className={styles.lead}>
            Events, education, bioregional connections. We welcome collaboration.
          </p>
        </div>
      </Section>

      {/* Partnership Types */}
      <Section id="partnership-types">
        <SectionHeader
          title="Opportunities"
          subtitle="Ways to collaborate"
        />

        <div className={styles.partnerGrid}>
          {partnershipTypes.map((type) => (
            <div key={type.title} className={styles.partnerCard}>
              <div className={styles.partnerHeader}>
                <span className={styles.partnerIcon}>{type.icon}</span>
                <h3>{type.title}</h3>
              </div>
              <p className={styles.partnerDescription}>{type.description}</p>
              <h4 className={styles.offeringsTitle}>What We Offer</h4>
              <ul className={styles.offeringsList}>
                {type.offerings.map((offering, i) => (
                  <li key={i}>
                    <Check size={14} />
                    {offering}
                  </li>
                ))}
              </ul>
              <p className={styles.idealFor}>
                <strong>Ideal for:</strong> {type.ideal}
              </p>
              <Button href={`/contact?subject=${encodeURIComponent(type.title + ' Partnership')}`} variant="secondary" size="sm">
                Discuss Partnership
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Partner */}
      <Section variant="gradient" id="why-partner">
        <SectionHeader
          title="Why Partner"
          subtitle="Benefits"
        />

        <div className={styles.benefitsGrid}>
          {collaborationBenefits.map((benefit) => (
            <div key={benefit.title} className={styles.benefitCard}>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Venue Details */}
      <Section id="venue">
        <div className={styles.venueContent}>
          <div className={styles.venueText}>
            <h2>Event Spaces</h2>
            <p>When operational:</p>
            <ul>
              <li><strong>Indoor Hall:</strong> 100-200 capacity</li>
              <li><strong>Amphitheater:</strong> Outdoor festivals</li>
              <li><strong>Workshop Rooms:</strong> Breakout sessions</li>
              <li><strong>Accommodations:</strong> Lodging and camping</li>
              <li><strong>Kitchen:</strong> Farm-to-table catering</li>
            </ul>
            <p className={styles.venueNote}>Still in land acquisition. Early conversations welcome.</p>
          </div>
          <div className={styles.venueVisual}>
            <div className={styles.venuePlaceholder}>
              <span>Future Venue</span>
              <p>Southern Vermont</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Partnership Process */}
      <Section variant="light" id="process">
        <SectionHeader
          title="Process"
          subtitle="Four steps"
        />

        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processNumber}>1</div>
            <h4>Conversation</h4>
            <p>Share your vision. Explore alignment.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processNumber}>2</div>
            <h4>Proposal</h4>
            <p>Scope, responsibilities, benefits.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processNumber}>3</div>
            <h4>Agreement</h4>
            <p>Formalize and plan.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processNumber}>4</div>
            <h4>Collaborate</h4>
            <p>Execute and grow.</p>
          </div>
        </div>
      </Section>

      {/* Current Partners Section */}
      <Section id="network">
        <div className={styles.networkContent}>
          <h2>Bioregional Network</h2>
          <p>Building relationships with farms, land trusts, and community projects throughout Vermont.</p>
          <div className={styles.networkCta}>
            <h3>Connection Areas</h3>
            <div className={styles.networkTags}>
              <span>Farms</span>
              <span>Land Trusts</span>
              <span>Gardens</span>
              <span>Food Security</span>
              <span>Permaculture</span>
              <span>Healing Arts</span>
              <span>Building</span>
              <span>Education</span>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <SectionHeader
          title="FAQ"
          subtitle="Common questions"
        />

        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>Venue availability?</h4>
            <p>After land acquisition. Early partnerships welcome.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Rates?</h4>
            <p>Flexible, values-aligned pricing.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>For-profit partners?</h4>
            <p>Yes, if mission-aligned.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Ongoing programs?</h4>
            <p>Yes. Revenue-sharing available.</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready?"
        subtitle="Let's create together."
        primaryText="Start Conversation"
        primaryHref="/contact?subject=Partnership%20Inquiry"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
