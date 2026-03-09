import { Link } from 'react-router-dom';
import { PageLayout, Button } from '../components';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <PageLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary">Back to home</Button>
        </Link>
      </div>
    </PageLayout>
  );
}
