import { useParams, Link } from 'react-router-dom';
import { PageLayout, GuideLayout } from '../components';
import { getGuide } from '../content/guides';
import styles from './GuidePage.module.css';

export function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuide(slug) : undefined;

  if (!guide) {
    return (
      <PageLayout>
        <div className={styles.guide404}>
          <h1>Guide not found</h1>
          <p>The guide you're looking for doesn't exist or has been moved.</p>
          <Link to="/guides">Back to guides</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout narrow>
      <GuideLayout
        title={guide.title}
        tocItems={guide.tocItems}
        references={guide.references}
      >
        {guide.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`section-${section.id}`}
          >
            <h2 id={`section-${section.id}`}>{section.title}</h2>
            {section.content}
          </section>
        ))}
      </GuideLayout>
    </PageLayout>
  );
}
