import type { HTMLAttributes } from 'react';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'section';
  hover?: boolean;
}

export function Card({
  as: Component = 'article',
  hover = false,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={`${styles.card} ${hover ? styles.hover : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardTitle({ children, ...props }: { children: React.ReactNode } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={styles.title} {...props}>
      {children}
    </h3>
  );
}

export function CardSummary({ children }: { children: React.ReactNode }) {
  return <p className={styles.summary}>{children}</p>;
}
