import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const navItems: { to: string; label: string }[] = [
  { to: '/', label: 'Home' },
  { to: '/guides', label: 'Guides' },
  { to: '/legal', label: 'Legal' },
  { to: '/tech', label: 'Technology' },
  { to: '/proposal', label: 'Proposal' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
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
