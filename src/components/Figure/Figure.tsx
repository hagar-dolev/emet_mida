import type { ReactNode } from 'react';
import styles from './Figure.module.css';

export interface FigureProps {
  /** Image URL (e.g. from public/images or external) */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional caption below the image (string or JSX, e.g. with links) */
  caption?: ReactNode;
  className?: string;
}

export function Figure({ src, alt, caption, className = '' }: FigureProps) {
  return (
    <figure className={`${styles.figure} ${className}`.trim()}>
      <img src={src} alt={alt} className={styles.img} loading="lazy" />
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
}
