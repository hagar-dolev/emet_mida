import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <nav className={styles.links} aria-label="ניווט תחתון">
          <Link to="/">בית</Link>
          <Link to="/guides">מדריכים</Link>
          <Link to="/legal">משפט</Link>
          <Link to="/tech">טכנולוגיה</Link>
          <Link to="/proposal">הצעה</Link>
        </nav>
        <p className={styles.disclaimer}>
          האתר מיועד למטרות מידע וחינוך בלבד. האמור בו אינו מהווה ייעוץ משפטי. יש להתייעץ עם בעל מקצוע מוסמך בעניינים משפטיים או רגולטוריים.
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} — מרכז ידע ציבורי. התוכן עשוי להתעדכן ללא הודעה מוקדמת.
        </p>
      </div>
    </footer>
  );
}
