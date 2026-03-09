import styles from './Callout.module.css';

type CalloutVariant = 'info' | 'warning' | 'danger' | 'neutral';

export interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantToRole: Record<CalloutVariant, string> = {
  info: 'status',
  warning: 'alert',
  danger: 'alert',
  neutral: 'note',
};

export function Callout({
  variant = 'info',
  title,
  children,
  className = '',
}: CalloutProps) {
  const role = variantToRole[variant];
  return (
    <aside
      className={`${styles.callout} ${styles[variant]} ${className}`.trim()}
      role={role}
      aria-label={title ?? `${variant} callout`}
    >
      {title && (
        <strong className={styles.title}>{title}</strong>
      )}
      <div className={styles.content}>{children}</div>
    </aside>
  );
}
