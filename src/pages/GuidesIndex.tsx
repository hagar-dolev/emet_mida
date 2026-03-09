import { Link } from 'react-router-dom';
import { PageLayout, Card, CardTitle, CardSummary, Tag } from '../components';
import { IconChevronRight } from '../components/icons';
import { guidesIndex } from '../content/guides';
import styles from './GuidesIndex.module.css';

export function GuidesIndex() {
  return (
    <PageLayout>
      <h1 className={styles.title}>Guides</h1>
      <p className={styles.intro}>
        Practical, short guides to help you understand AI-assisted misinformation, use AI responsibly in journalism, and navigate the legal gap.
      </p>
      <ul className={styles.list} role="list">
        {guidesIndex.map((guide) => (
          <li key={guide.slug}>
            <Link to={`/guides/${guide.slug}`} className={styles.cardLink}>
              <Card hover as="div" className={styles.card}>
                <div className={styles.cardHeader}>
                  <CardTitle>{guide.title}</CardTitle>
                  <span className={styles.chevron} aria-hidden>
                    <IconChevronRight />
                  </span>
                </div>
                <CardSummary>{guide.summary}</CardSummary>
                <div className={styles.meta}>
                  {guide.tags.map((tag) => (
                    <Tag key={tag} variant="muted">
                      {tag}
                    </Tag>
                  ))}
                  {guide.readingTime != null && (
                    <span className={styles.readingTime}>
                      {guide.readingTime} min read
                    </span>
                  )}
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
