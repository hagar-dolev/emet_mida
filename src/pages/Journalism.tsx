import { PageLayout, Card, CardTitle } from '../components';
import { topics } from '../content/journalism';
import styles from './Journalism.module.css';

export function Journalism() {
  return (
    <PageLayout>
      <section className={styles.header} aria-labelledby="journalism-title">
        <h1 id="journalism-title" className={styles.title}>עיתונות בעידן ה-AI</h1>
        <p className={styles.subtitle}>
          הטמעת כלי בינה מלאכותית במערכות החדשות משנה את פני המקצוע מהיסוד. לפניכם סקירה של המגמות והסוגיות המרכזיות בשוק המידע כיום:
        </p>
      </section>

      <section className={styles.topicsContainer} aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="visually-hidden">סקירת נושאים</h2>
        
        <div className={styles.topicList}>
          {topics.map((topic) => (
            <div key={topic.id} className={styles.topicItem}>
              <Card as="article">
                <CardTitle>{topic.title}</CardTitle>
                <div className={styles.topicContent}>{topic.content}</div>
                {topic.references && topic.references.length > 0 && (
                  <ul className={styles.refList}>
                    {topic.references.map((ref, i) => (
                      <li key={i}>
                        {ref.url ? (
                          <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a>
                        ) : (
                          <span>{ref.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}