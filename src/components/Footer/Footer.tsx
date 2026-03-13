import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <nav className={styles.links} aria-label="ניווט תחתון">
          <Link to="/">בית</Link>
          <Link to="/guides">מדריכים</Link>
          <Link to="/tech">טכנולוגיה</Link>
          <Link to="/legal">משפט</Link>
          <Link to="/proposal">הצעה</Link>
        </nav>
        <p className={styles.disclaimer}>
          האתר נעשה במסגרת קורס ״בינה מלאכותית ומוסר״ באוניברסיטת רייכמן.
        </p>
      </div>
    </footer>
  );
}
