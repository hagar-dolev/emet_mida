import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './PageLayout.module.css';

export interface PageLayoutProps {
  children: React.ReactNode;
  /** Optional main landmark title for accessibility (not visually shown if you use your own h1) */
  title?: string;
  /** Narrow content width for long-form reading */
  narrow?: boolean;
}

export function PageLayout({ children, title, narrow = false }: PageLayoutProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        דלג לתוכן הראשי
      </a>
      <Header />
      <main
        id="main-content"
        className={`${styles.main} ${narrow ? styles.narrow : ''}`}
        role="main"
        aria-label={title ?? 'תוכן ראשי'}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
