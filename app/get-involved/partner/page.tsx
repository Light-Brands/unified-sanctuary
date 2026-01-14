import type { Metadata } from 'next';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Partner With Us',
  description: 'Collaborate with Unified Sanctuaries on events, educational programs, bioregional initiatives, and research partnerships.',
};

const partnershipTypes = [
  {
    title: 'Event Hosting',
    icon: '🎪',
    description: 'Host your retreat, workshop, festival, wedding, or gathering at our venue',
    offerings: [
      'Flexible indoor and outdoor event spaces',
      'Professional A/V and event production support',
      'On-site accommodations and camping options',
      'Catering coordination with farm-fresh ingredients',
      'Affordable rates for aligned organizations and artists',
      'Production partnership opportunities for larger events',
    ],
    ideal: 'Retreat leaders, workshop facilitators, event producers, wedding planners, artists, and festival organizers seeking a regenerative venue.',
  },
  {
    title: 'Educational Programs',
    icon: '📚',
    description: 'Co-develop and deliver transformative learning experiences',
    offerings: [
      'Curriculum co-development in permaculture, healing arts, natural building',
      'Access to land, facilities, and infrastructure for hands-on learning',
      'Built-in audience of engaged community members and visitors',
      'Documentation and filming for online course development',
      'Revenue-sharing models for ongoing programs',
      'Certification pathway partnerships',
    ],
    ideal: 'Educators, practitioners, and organizations teaching permaculture, herbalism, natural building, somatic healing, community governance, and related topics.',
  },
  {
    title: 'Bioregional Collaboration',
    icon: '🌿',
    description: 'Connect with the growing network of Southern Vermont regenerative initiatives',
    offerings: [
      'Resource sharing with regional farms and land trusts',
      'Joint programming and cross-promotion',
      'Collective purchasing and distribution networks',
      'Mutual aid and skill-sharing agreements',
      'Collaborative grant applications',
      'Bioregional council participation',
    ],
    ideal: 'Local farms, land trusts, conservation organizations, community gardens, food security initiatives, and regenerative agriculture projects.',
  },
  {
    title: 'Research Partnerships',
    icon: '🔬',
    description: 'Conduct studies and experiments in our living laboratory',
    offerings: [
      'Access to land and facilities for field research',
      'Collaboration on soil health, biodiversity, and ecosystem studies',
      'Community governance and social structure research opportunities',
      'Regenerative economics and alternative currency studies',
      'Natural building and sustainable technology testing',
      'Data sharing and co-publication agreements',
    ],
    ideal: 'Academic institutions, research organizations, and independent researchers studying regenerative systems, community resilience, and sustainable living.',
  },
];

const collaborationBenefits = [
  {
    title: 'Aligned Values',
    description: 'Work with a community deeply committed to regeneration, equity, and collective wellbeing.',
  },
  {
    title: 'Beautiful Setting',
    description: 'Access stunning Southern Vermont landscapes, from forests to meadows to mountain views.',
  },
  {
    title: 'Built-In Community',
    description: 'Tap into an engaged network of practitioners, learners, and supporters.',
  },
  {
    title: 'Flexible Structures',
    description: 'We design partnership agreements that work for your organization and goals.',
  },
  {
    title: 'Long-Term Relationships',
    description: 'We seek partnerships that grow and deepen over time, not one-off transactions.',
  },
  {
    title: 'Mutual Support',
    description: 'Partnerships are reciprocal—we grow together and support each other\'s missions.',
  },
];

const partnerTestimonials = [
  {
    quote: 'Unified Sanctuaries understands that real impact comes from collaboration. Their approach to partnership is rooted in mutual benefit and shared vision.',
    author: 'Future Partner',
    role: 'Retreat Leader',
  },
  {
    quote: 'The team brings genuine care and expertise to every collaboration. They\'re building something special in Vermont.',
    author: 'Future Partner',
    role: 'Educator',
  },
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Partner With Us</p>
          <h1>Create Regenerative<br/>Impact Together</h1>
          <p className={styles.lead}>
            Unified Sanctuaries welcomes collaboration with aligned organizations, educators,
            and practitioners. Whether you want to host events, develop educational programs,
            or build bioregional connections, we&apos;re building infrastructure for partnership.
          </p>
        </div>
      </Section>

      {/* Partnership Types */}
      <Section id="partnership-types">
        <SectionHeader
          title="Partnership Opportunities"
          subtitle="Multiple pathways for collaboration"
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
          title="Why Partner With Us"
          subtitle="The benefits of collaborative creation"
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
            <h2>Our Event Spaces</h2>
            <p>
              When our venue becomes operational, we&apos;ll offer a range of spaces designed
              for gatherings of all sizes. Our vision includes:
            </p>
            <ul>
              <li><strong>Indoor Event Hall:</strong> Flexible space for workshops, performances, and celebrations (capacity 100-200)</li>
              <li><strong>Outdoor Amphitheater:</strong> Natural bowl setting for festivals, concerts, and ceremonies</li>
              <li><strong>Workshop Spaces:</strong> Multiple rooms for breakout sessions and hands-on learning</li>
              <li><strong>Retreat Accommodations:</strong> Private and shared lodging for overnight guests</li>
              <li><strong>Campground:</strong> Tent and vehicle camping with facilities</li>
              <li><strong>Farm-to-Table Kitchen:</strong> Full commercial kitchen with fresh ingredients from our farm</li>
            </ul>
            <p className={styles.venueNote}>
              While we&apos;re still in land acquisition phase, we welcome early conversations
              with potential event partners to shape our venue development.
            </p>
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
          title="Partnership Process"
          subtitle="How we build collaborative relationships"
        />

        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processNumber}>1</div>
            <h4>Initial Conversation</h4>
            <p>Reach out to share your vision and explore alignment. We&apos;ll discuss goals, values, and potential collaboration structures.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processNumber}>2</div>
            <h4>Proposal Development</h4>
            <p>Together, we&apos;ll develop a partnership proposal that outlines scope, responsibilities, resources, and mutual benefits.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processNumber}>3</div>
            <h4>Agreement & Planning</h4>
            <p>We formalize the partnership with clear agreements and begin detailed planning for implementation.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processNumber}>4</div>
            <h4>Collaborate & Grow</h4>
            <p>We execute together, evaluate outcomes, and look for ways to deepen and expand our collaboration over time.</p>
          </div>
        </div>
      </Section>

      {/* Current Partners Section */}
      <Section id="network">
        <div className={styles.networkContent}>
          <h2>Building a Bioregional Network</h2>
          <p>
            Unified Sanctuaries is actively building relationships with farms, land trusts,
            educational organizations, and community projects throughout Southern Vermont and beyond.
          </p>
          <p>
            We envision a network of interconnected eco-villages and regenerative initiatives
            that share knowledge, resources, and support. If you&apos;re part of this emerging
            ecosystem—or want to be—we&apos;d love to connect.
          </p>
          <div className={styles.networkCta}>
            <h3>Areas of Bioregional Connection</h3>
            <div className={styles.networkTags}>
              <span>Regenerative Farms</span>
              <span>Land Trusts</span>
              <span>Community Gardens</span>
              <span>Food Security</span>
              <span>Permaculture</span>
              <span>Healing Arts</span>
              <span>Natural Building</span>
              <span>Alternative Education</span>
              <span>Conservation</span>
              <span>Climate Resilience</span>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <SectionHeader
          title="Partnership FAQ"
          subtitle="Common questions about collaboration"
        />

        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>When will the venue be available?</h4>
            <p>
              We&apos;re currently in the land acquisition phase. Once we secure property, we&apos;ll
              move through development phases. We welcome early partnerships to help shape our
              venue and programming.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>What are your rates?</h4>
            <p>
              We offer flexible, values-aligned pricing. Rates depend on event size, duration,
              services needed, and organizational alignment. We prioritize accessibility for
              community-benefit events.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Do you work with for-profit organizations?</h4>
            <p>
              Yes, we partner with mission-aligned businesses. We&apos;re especially interested
              in B-Corps, cooperatives, and companies with genuine regenerative practices.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Can we develop an ongoing program together?</h4>
            <p>
              Absolutely. We love building long-term educational and programmatic partnerships.
              Revenue-sharing and co-branding arrangements are available for ongoing programs.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to Collaborate?"
        subtitle="Let's explore how we can create regenerative impact together."
        primaryText="Start a Conversation"
        primaryHref="/contact?subject=Partnership%20Inquiry"
        secondaryText="View All Ways to Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
