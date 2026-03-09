import { Link } from 'react-router-dom';
import { PageLayout, Button } from '../components';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <PageLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>העמוד לא נמצא</h1>
        <p className={styles.text}>
          העמוד שחיפשתם לא קיים או הועבר.
        </p>
        <Link to="/">
          <Button variant="primary">חזרה לדף הבית</Button>
        </Link>
      </div>
    </PageLayout>
  );
}
