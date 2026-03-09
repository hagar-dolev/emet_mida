import styles from './Tag.module.css';

export interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'muted';
  className?: string;
}

export function Tag({ children, variant = 'default', className = '' }: TagProps) {
  return (
    <span
      className={`${styles.tag} ${styles[variant]} ${className}`.trim()}
      role="status"
    >
      {children}
    </span>
  );
}
