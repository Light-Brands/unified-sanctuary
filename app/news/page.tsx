import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Calendar } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Stay updated on Unified Sanctuaries - our land search progress, community events, and journey toward creating a regenerative community in Vermont.',
};

const updates = [
  {
    date: 'January 2026',
    title: 'Land Search Continues in Southern Vermont',
    content: 'We have narrowed our search to three promising properties in the Brattleboro-Guilford-Putney triangle. Each offers unique possibilities for our four-platform vision. One property features an existing farmhouse and barn, another has exceptional water access with a year-round stream, and the third offers the acreage we need for the full community build-out. Site visits are scheduled for February.',
    category: 'Land Search',
  },
  {
    date: 'December 2025',
    title: 'Winter Gathering: Community Visioning Session',
    content: 'Over 30 people joined us for a day of shared dreaming, mapping out what the first year on land might look like. We used participatory design methods to envision the initial infrastructure, housing placement, and farm layout. Key themes emerged: the importance of a central gathering space, the need for both privacy and connection, and enthusiasm for learn-by-doing building workshops.',
    category: 'Community',
  },
  {
    date: 'November 2025',
    title: 'Fiscal Sponsorship Secured',
    content: 'We are now fiscally sponsored, allowing us to receive tax-deductible donations. This is a major milestone for our fundraising efforts. Our fiscal sponsor has experience supporting land-based community projects and aligns with our values around regenerative economics. All donations now go directly toward the land acquisition fund.',
    category: 'Milestone',
  },
  {
    date: 'October 2025',
    title: 'Core Team Grows to Ten',
    content: 'We welcome Pato to the core team, bringing deep permaculture expertise and decades of experience designing regenerative systems. Pato has worked with communities across Central and South America, specializing in water harvesting, food forests, and natural building. Our team now includes expertise across all four planned platforms.',
    category: 'Team',
  },
  {
    date: 'September 2025',
    title: 'Brand Identity Complete',
    content: 'Our new visual identity reflects our core values: vessels that hold and pour, networks that connect and nourish. The vessel motif represents our four platforms—each holding something essential, each pouring into the others. The tagline "The vessel holds. The water nourishes." captures the interdependence at the heart of our model.',
    category: 'Milestone',
  },
  {
    date: 'August 2025',
    title: 'First Community Survey Results',
    content: 'Over 200 people responded to our community needs survey. Top priorities identified: affordable housing options (78%), local food access (72%), healing arts and wellness spaces (68%), and educational programming (65%). Respondents expressed strong interest in membership programs and work-exchange opportunities. These insights are shaping our platform designs.',
    category: 'Research',
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>News & Updates</p>
          <h1>The Journey Unfolds</h1>
          <p className={styles.lead}>
            Follow along as we search for land, build community, and move toward
            our vision of regenerative living in Vermont.
          </p>
        </div>
      </Section>

      {/* Updates */}
      <Section>
        <div className={styles.updatesList}>
          {updates.map((update, i) => (
            <article key={i} className={styles.updateCard}>
              <div className={styles.updateMeta}>
                <span className={styles.category}>{update.category}</span>
                <span className={styles.date}>
                  <Calendar size={14} />
                  {update.date}
                </span>
              </div>
              <h2>{update.title}</h2>
              <p>{update.content}</p>
            </article>
          ))}
        </div>

        <div className={styles.loadMore}>
          <p>More updates coming as our journey continues.</p>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="gradient">
        <div className={styles.newsletterCTA}>
          <h2>Stay in the Flow</h2>
          <p>
            Join our newsletter for monthly updates on the land search,
            community events, and ways to get involved.
          </p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </Section>

      <CTA
        title="Want to Be Part of the Story?"
        subtitle="There are many ways to contribute to what we're building."
        primaryText="Get Involved"
        primaryHref="/get-involved"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
