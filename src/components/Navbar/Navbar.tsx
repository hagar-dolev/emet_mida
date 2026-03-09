import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const navItems: { to: string; label: string }[] = [
  { to: '/', label: 'בית' },
  { to: '/guides', label: 'מדריכים' },
  { to: '/legal', label: 'משפט' },
  { to: '/tech', label: 'טכנולוגיה' },
  { to: '/proposal', label: 'הצעה' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar} aria-label="ניווט ראשי">
      <ul className={styles.list} role="list">
        {navItems.map(({ to, label }) => {
          const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
          return (
            <li key={to}>
              <Link
                to={to}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
