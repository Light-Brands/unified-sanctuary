import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Calendar } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'News',
  description: 'Land search, events, and community updates.',
};

const updates = [
  {
    date: 'January 2026',
    title: 'Three Properties Under Consideration',
    content: 'Narrowed to three properties in Brattleboro-Guilford-Putney triangle. Site visits in February.',
    category: 'Land',
  },
  {
    date: 'December 2025',
    title: 'Winter Visioning Gathering',
    content: '30+ people mapped first year on land. Key themes: gathering space, privacy/connection balance.',
    category: 'Community',
  },
  {
    date: 'November 2025',
    title: 'Fiscal Sponsorship Secured',
    content: 'Tax-deductible donations now possible. Donations go to land fund.',
    category: 'Milestone',
  },
  {
    date: 'October 2025',
    title: 'Core Team: Ten Members',
    content: 'Pato joins with permaculture expertise. Expertise across all four platforms.',
    category: 'Team',
  },
  {
    date: 'September 2025',
    title: 'Brand Identity Complete',
    content: 'Visual identity reflects land in trust, community together.',
    category: 'Milestone',
  },
  {
    date: 'August 2025',
    title: 'Community Survey Results',
    content: '200+ responses. Top priorities: housing (78%), food (72%), wellness (68%).',
    category: 'Research',
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>News</p>
          <h1>Updates</h1>
          <p className={styles.lead}>
            Land search, community building, progress in Vermont.
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
          <h2>Stay Connected</h2>
          <p>Monthly updates on land search and events.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </Section>

      <CTA
        title="Be Part of It"
        subtitle="Many ways to contribute."
        primaryText="Get Involved"
        primaryHref="/get-involved"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
