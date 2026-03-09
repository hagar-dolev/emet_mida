import { Link } from 'react-router-dom';
import { PageLayout, Card, CardTitle, CardSummary, Tag } from '../components';
import { IconChevronRight } from '../components/icons';
import { guidesIndex } from '../content/guides';
import styles from './GuidesIndex.module.css';

export function GuidesIndex() {
  return (
    <PageLayout>
      <h1 className={styles.title}>מדריכים</h1>
      <p className={styles.intro}>
        מדריכים קצרים ומעשיים שיעזרו לכם להבין דיסאינפורמציה בעזרת בינה מלאכותית, להשתמש ב-AI באחריות בעיתונות ולנווט בפער החקיקה.
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
                      {guide.readingTime} דק׳ קריאה
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
