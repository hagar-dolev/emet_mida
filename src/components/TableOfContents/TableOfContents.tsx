import styles from './TableOfContents.module.css';

export interface TocItem {
  id: string;
  label: string;
  level?: number; /* 1 = h2, 2 = h3 */
}

export interface TableOfContentsProps {
  items: TocItem[];
  title?: string;
  className?: string;
}

export function TableOfContents({
  items,
  title = 'בעמוד זה',
  className = '',
}: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      className={`${styles.toc} ${className}`}
      aria-label="תוכן העמוד"
    >
      <h2 className={styles.title}>{title}</h2>
      <ol className={styles.list} role="list">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 2 ? styles.indent : undefined}
          >
            <a href={`#${item.id}`} className={styles.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
