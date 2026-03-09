import { TableOfContents, type TocItem } from '../TableOfContents';
import styles from './GuideLayout.module.css';

export interface Reference {
  title: string;
  url?: string;
  note?: string;
}

export interface GuideLayoutProps {
  title: string;
  /** Section id → label for TOC */
  tocItems?: TocItem[];
  references?: Reference[];
  children: React.ReactNode;
}

export function GuideLayout({
  title,
  tocItems = [],
  references = [],
  children,
}: GuideLayoutProps) {
  return (
    <div className={styles.wrapper}>
      {tocItems.length > 0 && (
        <aside className={styles.sidebar} aria-label="תוכן העמוד">
          <TableOfContents items={tocItems} />
        </aside>
      )}
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>{title}</h1>
        <div className={styles.body}>{children}</div>
        {references.length > 0 && (
          <section className={styles.references} aria-labelledby="ref-heading">
            <h2 id="ref-heading">מקורות</h2>
            <ul className={styles.refList} role="list">
              {references.map((ref, i) => (
                <li key={i}>
                  {ref.url ? (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      {ref.title}
                      <span className={styles.visuallyHidden}>(נפתח בטאב חדש)</span>
                    </a>
                  ) : (
                    <span>{ref.title}</span>
                  )}
                  {ref.note && (
                    <span className={styles.refNote}> — {ref.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
