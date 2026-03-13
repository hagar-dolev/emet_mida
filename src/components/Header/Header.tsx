import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import styles from './Header.module.css';

export interface HeaderProps {
  siteName?: string;
  subtitle?: string;
}

export function Header({
  siteName = 'עיתונאות, בינה מלאכותית ופערי חקיקה',
  subtitle = 'מרכז ידע ציבורי ליוצרים ולצרכני תוכן עיתונאי',
}: HeaderProps) {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.brand}>
        <Link to="/" className={styles.homeLink}>
          <h1 className={styles.title}>{siteName}</h1>
          {subtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
        </Link>
      </div>
      <Navbar />
    </header>
  );
}
