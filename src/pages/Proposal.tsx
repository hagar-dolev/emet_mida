import { PageLayout, Callout, Button } from '../components';
import styles from './Proposal.module.css';

export function Proposal() {
  return (
    <PageLayout narrow>
      <h1 className={styles.title}>הצעה</h1>

      <section aria-labelledby="proposed-fix-heading">
        <h2 id="proposed-fix-heading" className={styles.heading}>
          ההצעה שלנו לתיקון
        </h2>
        <p>
          אנו מציעים כיוון בשני חלקים: ראשית, חיזוק אוריינות בינה מלאכותית ומדיה כדי שיוצרים וצרכנים יוכלו לזהות ולטפל בתוכן בעזרת AI ובתוכן סינתטי. שנית, קידום תיקון חקיקתי ממוקד שסוגר את הפער הנוכחי — ובירור מתי ואיך החוק חל על תוכן מטעה שנוצר ב-AI, בלי לחנוק שימוש לגיטימי ב-AI בעיתונות ובחינוך. צורת התיקון המדויקת תלויה ברגולציה ובייעוץ עם מומחים משפטיים ומקצועיים.
        </p>
      </section>

      <section aria-labelledby="guidelines-heading">
        <h2 id="guidelines-heading" className={styles.heading}>
          הנחיות מעשיות
        </h2>
        <p>
          במקביל, אנו תומכים בהנחיות מעשיות למערכות ולפלטפורמות: גילוי שקוף כשמשתמשים ב-AI בייצור תוכן, סטנדרטים לאימות לפני פרסום ותהליכי תיקון ברורים. אלה אינם תחליף לחוק אך יכולים להפחית נזק ולבנות אמון בעוד המסגרת המשפטית מדביקה פער.
        </p>
      </section>

      <Callout variant="info" title="הורדה / יצירת קשר">
        <p style={{ margin: 0 }}>
          לסיכום בן עמוד אחד או ליצירת קשר לגבי ההצעה, כתבו אלינו ל־{' '}
          <a href="mailto:contact@example.org">contact@example.org</a> (placeholder). נעדכן עם פרטי קשר אמיתיים ובהתאם — קישור ל-PDF להורדה.
        </p>
      </Callout>

      <div className={styles.cta}>
        <a href="mailto:contact@example.org">
          <Button variant="outline">צרו קשר</Button>
        </a>
      </div>
    </PageLayout>
  );
}
