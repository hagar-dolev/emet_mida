import { Link } from 'react-router-dom';
import { PageLayout, Button, Card, CardTitle, CardSummary } from '../components';
import { IconBook, IconScale, IconCpu, IconFileText } from '../components/icons';
import styles from './Home.module.css';

const featureCards = [
  {
    to: '/guides',
    title: 'מדריכים',
    summary: 'מדריכים מעשיים לזיהוי דיסאינפורמציה בעזרת בינה מלאכותית, שימוש אחראי ב-AI בעיתונות והבנת פער החקיקה.',
    icon: <IconBook />,
  },
  {
    to: '/journalism',
    title: 'שוק העיתונות בעידן ה-AI',
    summary: 'מבנה שוק העיתונות המודרני בסביבת מידע דיגיטלית.',
    icon: <IconBook />,// todo
  },
  {
    to: '/legal',
    title: 'פערי חקיקה',
    summary: 'מדוע החוק הקיים לרוב לא מספיק כדי לטפל בתוכן מטעה שנוצר בבינה מלאכותית ומה חסר.',
    icon: <IconScale />,
  },
  {
    to: '/tech',
    title: 'טכנולוגיה',
    summary: 'איך מודלי שפה ומדיה גנרטיבית מאפשרים ייצור המוני של תוכן מטעה וסיכון לולאת המשוב.',
    icon: <IconCpu />,
  },
  {
    to: '/proposal',
    title: 'הצעה',
    summary: 'כיוון ההצעה שלנו: חיזוק אוריינות ותיקון חקיקתי לסגירת הפער עבור יוצרים וצרכנים.',
    icon: <IconFileText />,
  },
];

export function Home() {
  return (
    <PageLayout>
      <section className={styles.hero} aria-labelledby="hero-title">
        <h1 id="hero-title" className={styles.heroTitle}>
          דיסאינפורמציה ובינה מלאכותית — פערי חקיקה
        </h1>
        <p className={styles.heroSubtitle}>
          מרכז ידע ציבורי ליוצרים ולצרכני תוכן עיתונאי — להבין את הסיכונים, את פער החקיקה ומה אפשר לעשות.
        </p>
      </section>

      <section className={styles.cards} aria-labelledby="features-heading">
        <h2 id="features-heading" className={styles.sectionTitle}>
          גלו
        </h2>
        <div className={styles.cardGrid} role="list">
          {featureCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className={styles.cardLink}
              role="listitem"
            >
              <Card hover as="div">
                <span className={styles.cardIcon} aria-hidden>
                  {card.icon}
                </span>
                <CardTitle>{card.title}</CardTitle>
                <CardSummary>{card.summary}</CardSummary>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.why} aria-labelledby="why-heading">
        <h2 id="why-heading" className={styles.sectionTitle}>
          למה האתר קיים
        </h2>
        <p className={styles.whyText}>
          דיסאינפורמציה מבוססת בינה מלאכותית שונה מדיסאינפורמציה קלאסית: הקנה מידה, הקלות בייצור ומדיה סינתטית מקשים על הפרט ועל החוק הקיים להדביק את הקצב. בנינו את המרכז הזה כדי להסביר את פער החקיקה, את הטכנולוגיה שמאחוריו ולהציע הנחיות מעשיות. הקהל שלנו הוא כל מי שיוצר או צורך תוכן עיתונאי ורוצה להישאר מעודכן.
        </p>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <h2 id="cta-heading" className={styles.visuallyHidden}>
          התחילו כאן
        </h2>
        <Link to="/guides">
          <Button variant="primary" className={styles.ctaButton}>
            התחילו כאן — עיינו במדריכים
          </Button>
        </Link>
      </section>
    </PageLayout>
  );
}
