import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <nav className={styles.links} aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/guides">Guides</Link>
          <Link to="/legal">Legal</Link>
          <Link to="/tech">Technology</Link>
          <Link to="/proposal">Proposal</Link>
        </nav>
        <p className={styles.disclaimer}>
          This site is for informational and educational purposes only. It does not constitute legal advice. Consult a qualified professional for legal or compliance matters.
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} — Public knowledge hub. Content may be updated without notice.
        </p>
      </div>
    </footer>
  );
}
